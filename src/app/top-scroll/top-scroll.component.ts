import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-top-scroll',
  templateUrl: './top-scroll.component.html'
})
export class TopScrollComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop(): void {
    this.document
      .getElementById('main-wrapper')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
