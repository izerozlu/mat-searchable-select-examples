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
