import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

/* Material */
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

/* Views */
import { PageComponent } from './views/page/page.component'

/* Directives */
import { ObserveElementDirective } from './directives/observe-element.directive'

@NgModule({
  declarations: [AppComponent, PageComponent, ObserveElementDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
