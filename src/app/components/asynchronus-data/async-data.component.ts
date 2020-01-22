import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-async-data',
  templateUrl: './async-data.component.html',
  styleUrls: ['./async-data.component.scss']
})
export class AsyncDataComponent implements OnDestroy {
  selectedItem: string;
  options: string[] = [];
  loading: boolean;
  remainingSeconds = 3;
  private intervalSubscription: Subscription;
  private countdownSubscription: Subscription;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  async fetchData() {
    this.loading = true;
    const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&sentences=2';
    const result: string[] = await this.httpClient.get<string[]>(url).pipe(delay(1500)).toPromise();
    this.options = result[0].split(' ');
    this.loading = false;
  }

  startInterval() {
    this.intervalSubscription = timer(0, 3000).subscribe(() => this.fetchData());
    this.countdownSubscription = timer(0, 1000).subscribe(() => {
      if (this.remainingSeconds-- === 0) {
        this.remainingSeconds = 3;
      }
    })
  }

  stopInterval() {
    this.intervalSubscription.unsubscribe();
    this.countdownSubscription.unsubscribe()
  }

}
