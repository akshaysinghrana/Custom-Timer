import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytestapp';
  counter = 15;
  mm: any = '00';
  ss: any = '15';
  showResend = true;

  ngOnInit() {
    setTimeout(() => {
      this.timecheck();
    }, 500);
  }

  convertTime(time) {
    this.mm = Math.floor(time / 60);
    this.ss = time % 60;
    if (this.mm < 10 && this.ss >= 10) {
      this.mm = '0' + this.mm;
      return this.mm + this.ss;
    } else if (this.mm > 10 && this.ss < 10) {
      this.ss = '0' + this.ss;
      return this.mm + this.ss;
    } else if (this.mm < 10 && this.ss < 10) {
      this.mm = '0' + this.mm;
      this.ss = '0' + this.ss;
      return this.mm + this.ss;
    }
    return this.mm + ':' + this.ss;
  }

  resend() {
    this.showResend = true;
    if (!this.counter) {
      this.counter = 15;
      setTimeout(() => {
        this.timecheck();
      }, 500);
    }
    // timer.html();
  }

  timecheck() {
    const turnOff = setTimeout(() => {
      this.timecheck();
    }, 1000);
    this.convertTime(--this.counter);
    if (!this.counter) {
      clearTimeout(turnOff);
      this.showResend = false;
    }
  }
}
