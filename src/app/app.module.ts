import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BasicUsageComponent} from './basic-usage/basic-usage.component';
import {MatSearchableSelectModule} from 'mat-searchable-select';

@NgModule({
  declarations: [
    AppComponent,
    BasicUsageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSearchableSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
