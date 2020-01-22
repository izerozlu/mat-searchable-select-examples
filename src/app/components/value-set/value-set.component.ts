import {Component, OnInit} from '@angular/core';

const defaultOptions = ['occaecat',
  'nostrud',
  'irure',
  'pariatur',
  'in',
  'sint'
];

@Component({
  selector: 'app-value-set',
  templateUrl: './value-set.component.html',
  styleUrls: ['./value-set.component.scss']
})
export class ValueSetComponent implements OnInit {
  selectedItem: string;
  selectedValue: string;
  options = defaultOptions;

  constructor() {
  }

  ngOnInit() {
  }

}
