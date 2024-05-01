import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private countdownInterval: any;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  constructor() { }

  ngOnInit(): void {
    let getDateLocalStorage = localStorage.getItem('countdownFlashSale');
    let targetDate: Date;

    if (getDateLocalStorage) {
      targetDate = new Date(getDateLocalStorage)
    } else {
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 6);
      localStorage.setItem('countdownFlashSale', targetDate.toISOString());
    }

    this.updateCountdown(targetDate);

    this.countdownInterval = setInterval(() => {
      this.updateCountdown(targetDate);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }


  private updateCountdown(targetDate: Date): void {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }
}
