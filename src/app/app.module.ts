import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

/* Material */
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

/* Components */
import { HeaderComponent } from './components/header/header.component'
import { PageComponent } from './views/page/page.component'
import { ObserveElementDirective } from './directives/observe-element.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageComponent,
    ObserveElementDirective,
  ],
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
