import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//module-implementation

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularFormsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
