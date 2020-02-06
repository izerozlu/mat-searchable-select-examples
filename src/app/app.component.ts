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
    import {Component, OnInit} from '@angular/core';

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
export class BasicUsageComponent implements OnInit {

  options: string[] = defaultOptions;
  selectedItem: string;

  constructor() {
  }

  ngOnInit() {
  }
}
    `
  };
}
