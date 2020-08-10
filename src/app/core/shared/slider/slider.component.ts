import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  noneArr;
  @Input() length: number;
  index = 0;
  @Input() cardElementsArr: any[];

  constructor() { }

  ngOnInit(): void {
    this.noneArr = new Array(this.length);
    console.log("None 0: " + this.noneArr[0]);
    console.log("Index: " + this.index);
    console.log("Length: " + this.length);
  }

  nextCard() {
    if (this.index < this.length && this.length - this.index - 1 >= 4) {
      this.noneArr[this.index] = true;
      this.index++;
    }
    console.log("index: " + this.index);
  }

  prevCard() {
    if (this.index > 0) {
      this.index--;
      this.noneArr[this.index] = false;
    }
    console.log("index: " + this.index);
  }
}
