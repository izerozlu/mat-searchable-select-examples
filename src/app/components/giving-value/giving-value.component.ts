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
