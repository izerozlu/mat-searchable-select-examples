import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BasicUsageComponent} from './components/basic-usage/basic-usage.component';
import {MatSearchableSelectModule} from 'mat-searchable-select';
import {MatDividerModule} from '@angular/material/divider';
import {ValueSetComponent} from './components/value-set/value-set.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormControlComponent} from './components/form-control/form-control.component';
import {AsyncDataComponent} from './components/asynchronus-data/async-data.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    BasicUsageComponent,
    ValueSetComponent,
    FormControlComponent,
    AsyncDataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSearchableSelectModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
