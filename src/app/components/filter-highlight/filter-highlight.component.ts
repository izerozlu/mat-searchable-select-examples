import {Component} from '@angular/core';
import {OPTIONS} from "../../constants/options";

@Component({
  selector: 'app-filter-highlight',
  templateUrl: './filter-highlight.component.html',
  styleUrls: ['./filter-highlight.component.scss']
})
export class FilterHighlightComponent {

  public options = OPTIONS.slice(20, 30);
  public searchQuery: string;

  constructor() {
  }
}
