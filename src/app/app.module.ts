import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsConfirmationComponent } from './buttons-confirmation/buttons-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsConfirmationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
