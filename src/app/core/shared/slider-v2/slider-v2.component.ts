import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-v2',
  templateUrl: './slider-v2.component.html',
  styleUrls: ['./slider-v2.component.css']
})
export class SliderV2Component implements OnInit {
  length = 9;
  showCardIndex = 2;
  page = 2;
  marginIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextShow() {
    if (this.marginIndex !== 6) {
      this.marginIndex += 3;
      this.page += 3;
      this.showCardIndex = this.page;
    }
  }

  prevShow() {
    if (this.marginIndex !== 0) {
      this.marginIndex -= 3;
      this.page -= 3;
      this.showCardIndex = this.page;
    }
  }

  clickCard(index: number) {
    this.showCardIndex = index;
  }

}
