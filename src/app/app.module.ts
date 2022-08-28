import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGroupFieldComponent } from './form-group-field/form-group-field.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    FormGroupFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
