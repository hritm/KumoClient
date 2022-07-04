import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-scroll',
  templateUrl: './top-scroll.component.html',
  styleUrls: ['./top-scroll.component.css'],
})
export class TopScrollComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onEdit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
