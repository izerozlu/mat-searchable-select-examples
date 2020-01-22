import {Component, OnInit} from '@angular/core';
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
