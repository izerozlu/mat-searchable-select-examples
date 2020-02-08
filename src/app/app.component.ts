import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public basicUsage = {
    html: `
  <mat-searchable-select (changed)="selectedItem = $event.nextValue">
    <mat-searchable-select-label>Lorem Words</mat-searchable-select-label>
    <mat-searchable-select-search-label>Search</mat-searchable-select-search-label>
    <mat-searchable-select-list [options]="options">
      <ng-template matSearchableSelectOption
                   let-option="option">
        {{option}}
      </ng-template>
    </mat-searchable-select-list>
  </mat-searchable-select>
  `,
    typescript: `
  import {Component} from '@angular/core';

  const defaultOptions = [
    'ex',
    'esse',
    'reprehenderit',
    'minim',
    'Lorem',
    'officia',
    'non',
    'nostrud',
    'qui',
    'anim'
  ];

  @Component({
    selector: 'app-basic-usage',
    templateUrl: './basic-usage.component.html',
    styleUrls: ['./basic-usage.component.scss']
  })
  export class BasicUsageComponent {

    options: string[] = defaultOptions;
    selectedItem: string;

    constructor() {
    }
  }
    `
  };
  public givingValue = {
    html: `
  <mat-button-toggle-group class="value-set__toggle-group" [value]="selectedItem" (change)="selectedItem = $event.value">
    <mat-button-toggle [value]="options[0]">{{options[0]}}</mat-button-toggle>
    <mat-button-toggle [value]="options[1]">{{options[1]}}</mat-button-toggle>
    <mat-button-toggle [value]="options[2]">{{options[2]}}</mat-button-toggle>
  </mat-button-toggle-group>

  <mat-searchable-select [value]="selectedItem" (changed)="selectedItem = $event.nextValue">
    <mat-searchable-select-label>Lorem Words</mat-searchable-select-label>
    <mat-searchable-select-search-label>Search</mat-searchable-select-search-label>
    <mat-searchable-select-list [options]="options">
      <ng-template matSearchableSelectOption let-option="option">
        {{option}}
      </ng-template>
    </mat-searchable-select-list>
  </mat-searchable-select>
`, typescript: `
  import {Component} from '@angular/core';

  const defaultOptions = [
    'occaecat',
    'nostrud',
    'irure',
    'pariatur',
    'in',
    'sint'
  ];

  @Component({
    selector: 'app-giving-value',
    templateUrl: './giving-value.component.html',
    styleUrls: ['./giving-value.component.scss']
  })
  export class GivingValueComponent {
    selectedItem: string;
    options = defaultOptions;

    constructor() {
    }

  }
`
  }
  public formControl = {
    html: `
  <mat-searchable-select [formControl]="formControl" (changed)="selectedItem = $event.nextValue">
    <mat-searchable-select-label>Lorem Words</mat-searchable-select-label>
    <mat-searchable-select-search-label>Search</mat-searchable-select-search-label>
    <mat-searchable-select-list [options]="options">
      <ng-template matSearchableSelectOption
                   let-option="option">
        {{option}}
      </ng-template>
    </mat-searchable-select-list>
  </mat-searchable-select>
`,
    typescript: `
  import {Component} from '@angular/core';
  import {FormControl} from "@angular/forms";

  const defaultOptions = [
    'ex',
    'esse',
    'reprehenderit',
    'minim',
    'Lorem',
    'officia',
    'non',
    'nostrud',
    'qui',
    'anim'
  ];


  @Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss']
  })
  export class FormControlComponent {
    selectedItem: string;
    options = defaultOptions;
    formControl = new FormControl();

    constructor() {
    }

  }
`
  }
  public filterHighlight = {
    html: `
  <mat-searchable-select highlight>
    <mat-searchable-select-label>Lorem Words</mat-searchable-select-label>
    <mat-searchable-select-search-label>Search</mat-searchable-select-search-label>
    <mat-searchable-select-list [options]="options">
      <ng-template matSearchableSelectOption
                   let-option="option">
        {{option}}
      </ng-template>
    </mat-searchable-select-list>
  </mat-searchable-select>
`,
    typescript: `
  import {Component} from '@angular/core';
  import {OPTIONS} from "../../constants/options";

  @Component({
    selector: 'app-filter-highlight',
    templateUrl: './filter-highlight.component.html',
    styleUrls: ['./filter-highlight.component.scss']
  })
  export class FilterHighlightComponent {

    public options = OPTIONS.slice(20, 30);

    constructor() {
    }
  }
`
  }
  public asynchronousFetch = {
    html: `
  <mat-searchable-select [is-loading]="fetching" (search-changed)="handleSearchQuery($event)">
    <mat-searchable-select-label>Lorem Words</mat-searchable-select-label>
    <mat-searchable-select-search-label>Search</mat-searchable-select-search-label>
    <mat-searchable-select-list [options]="options">
      <ng-template matSearchableSelectOption
                   let-option="option">
        {{option}}
      </ng-template>
    </mat-searchable-select-list>
  </mat-searchable-select>
`,
    typescript: `
  import {Component, OnInit} from '@angular/core';
  import {OPTIONS} from "../../constants/options";
  import {debounceTime, filter, tap} from "rxjs/operators";
  import {BehaviorSubject} from "rxjs";

  @Component({
    selector: 'app-asynchronous-fetch',
    templateUrl: './asynchronous-fetch.component.html',
    styleUrls: ['./asynchronous-fetch.component.scss']
  })
  export class AsynchronousFetchComponent implements OnInit {

    public options = OPTIONS.slice(0, 10);
    public fetching: boolean;

    private $searchQuery = new BehaviorSubject<string>(undefined);

    constructor() {
    }

    ngOnInit() {
      this.listenSearchQuery();
    }

    handleSearchQuery(searchQuery: string) {
      this.$searchQuery.next(searchQuery);
    }

    listenSearchQuery() {
      this.$searchQuery.pipe(
        filter((searchQuery: string) => searchQuery !== undefined),
        tap(() => this.fetching = true),
        debounceTime(1000)
      ).subscribe((searchQuery: string) => {
        this.options = OPTIONS.filter((option: string) => option.includes(searchQuery)).slice(0, 10);
        this.fetching = false;
      });
    }
}
`
  }

  copyToClipboard(content: string) {
    try {
      navigator.clipboard.writeText(content);
    } catch {
      console.error('Cannot copy in this browser. Try Chrome or Firefox.');
    }
  }
}
