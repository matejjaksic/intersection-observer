import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}

  onVisible (index: number) {
    console.log('Element #' + index + ' is visible')
  }
}
