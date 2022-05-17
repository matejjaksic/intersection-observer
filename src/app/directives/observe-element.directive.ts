import {
  Directive,
  OnDestroy,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core'
import { Subject, delay, filter } from 'rxjs'

@Directive({
  selector: '[appObserveElement]',
})
export class ObserveElementDirective
  implements OnDestroy, OnInit, AfterViewInit {
  @Input() debounceTime = 0
  @Input() threshold = 1

  @Output() visible = new EventEmitter<HTMLElement>()

  private observer: IntersectionObserver | undefined
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry
    observer: IntersectionObserver
  }>()

  constructor (private element: ElementRef) {}

  ngOnInit () {
    this.createObserver()
  }

  ngAfterViewInit () {
    this.startObservingElements()
  }

  ngOnDestroy () {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = undefined
    }
    this.subject$.complete()
  }

  private isVisible (element: HTMLElement) {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio === 1)
        observer.disconnect()
      })

      observer.observe(element)
    })
  }

  private createObserver () {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold,
    }

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          this.subject$.next({ entry, observer })
        }
      })
    }, options)
  }

  private startObservingElements () {
    if (!this.observer) {
      return
    }

    this.observer.observe(this.element.nativeElement)

    this.subject$
      .pipe(delay(this.debounceTime), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement
        const isStillVisible = await this.isVisible(target)

        if (isStillVisible) {
          this.visible.emit(target)
          observer.unobserve(target)
        }
      })
  }
}
