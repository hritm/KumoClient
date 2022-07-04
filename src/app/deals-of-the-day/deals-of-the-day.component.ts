import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-deals-of-the-day',
  templateUrl: './deals-of-the-day.component.html',
  styleUrls: ['./deals-of-the-day.component.css'],
})
export class DealsOfTheDayComponent implements AfterViewInit {
  @ViewChild('days') days!: ElementRef;
  @ViewChild('hours') hours!: ElementRef;
  @ViewChild('minutes') minutes!: ElementRef;
  @ViewChild('seconds') seconds!: ElementRef;

  ngAfterViewInit(): void {
    const second: number = 1000;
    const minute: number = second * 60;
    const hour: number = minute * 60;
    const day: number = hour * 24;

    const birthday: string = 'Oct 30, 2022 00:00:00';
    let countDown: number = new Date(birthday).getTime();

    let days: HTMLSpanElement = this.days.nativeElement as HTMLSpanElement;
    let hours: HTMLSpanElement = this.hours.nativeElement as HTMLSpanElement;
    let minutes: HTMLSpanElement = this.minutes
      .nativeElement as HTMLSpanElement;
    let seconds: HTMLSpanElement = this.seconds
      .nativeElement as HTMLSpanElement;

    const intervalId = setInterval((): void => {
      let now: number = new Date().getTime();
      let distance: number = countDown - now;

      days!.innerText = String(Math.floor(distance / day));
      hours!.innerText = String(Math.floor((distance % day) / hour));
      minutes!.innerText = String(Math.floor((distance % hour) / minute));
      seconds!.innerText = String(Math.floor((distance % minute) / second));

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById('headline');
        let countdown = document.getElementById('countdown');
        let content = document.getElementById('content');

        headline!.innerText = "It's my birthday!";
        countdown!.style.display = 'none';
        content!.style.display = 'block';

        clearInterval(intervalId);
      }
    }, 0);
  }
}
