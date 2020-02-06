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
