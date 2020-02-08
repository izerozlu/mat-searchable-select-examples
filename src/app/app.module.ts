import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BasicUsageComponent} from './components/basic-usage/basic-usage.component';
import {MatSearchableSelectModule} from 'mat-searchable-select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormControlComponent} from './components/form-control/form-control.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {FilterHighlightComponent} from './components/filter-highlight/filter-highlight.component';
import {AsynchronousFetchComponent} from "./components/asynchronous-fetch/asynchronous-fetch.component";
import {GivingValueComponent} from "./components/giving-value/giving-value.component";
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

const xml = () => import('highlight.js/lib/languages/xml');
const typescript = () => import('highlight.js/lib/languages/typescript');

@NgModule({
  declarations: [
    AppComponent,
    BasicUsageComponent,
    GivingValueComponent,
    FormControlComponent,
    FilterHighlightComponent,
    AsynchronousFetchComponent
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
    MatButtonModule,
    HighlightModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS, useValue: {
        languages: {
          xml,
          typescript
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('copy', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/copy.svg'));
  }
}
