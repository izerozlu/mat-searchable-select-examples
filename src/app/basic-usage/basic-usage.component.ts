import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  formControl = new FormControl();
  options: string[] = defaultOptions;
  selectedItem: string;

  constructor() {
  }

  ngOnInit() {
  }

  handleSearchChange(searchQuery: string) {
    this.options = defaultOptions.filter((option: string) => option.includes(searchQuery));
  }
}
