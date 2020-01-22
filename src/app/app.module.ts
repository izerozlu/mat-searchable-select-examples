import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BasicUsageComponent } from './components/basic-usage/basic-usage.component';
import { MatSearchableSelectModule } from 'mat-searchable-select';
import {MatDividerModule} from '@angular/material/divider';
import { ValueSetComponent } from './components/value-set/value-set.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    BasicUsageComponent,
    ValueSetComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSearchableSelectModule,
    MatDividerModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
