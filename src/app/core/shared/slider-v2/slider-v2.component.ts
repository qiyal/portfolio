import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../model/Project';

@Component({
  selector: 'app-slider-v2',
  templateUrl: './slider-v2.component.html',
  styleUrls: ['./slider-v2.component.css']
})
export class SliderV2Component implements OnInit {
  showCardIndex = 2;
  page = 2;
  marginIndex = 0;
  @Input() arrCard: Project[];

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
