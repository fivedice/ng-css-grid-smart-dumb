import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumbTriggerComponent } from './dumb-trigger/dumb-trigger.component';
import { DumbResponderComponent } from './dumb-responder/dumb-responder.component';
import { DumbAgnosticComponent } from './dumb-agnostic/dumb-agnostic.component';
import { SmartComponent } from './smart/smart.component';

@NgModule({
  declarations: [
    AppComponent,
    DumbTriggerComponent,
    DumbResponderComponent,
    DumbAgnosticComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
