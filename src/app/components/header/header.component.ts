import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string | undefined

  ngOnInit () {
    if (!this.title) throw new Error('Header title not set!')
  }
}
