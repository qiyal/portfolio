import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-diagram',
  templateUrl: './circle-diagram.component.html',
  styleUrls: ['./circle-diagram.component.css']
})
export class CircleDiagramComponent implements OnInit {
  value = 0;
  timer;
  true90 = false;
  true85 = false;
  true80 = false;
  @Input() inputValue: number;
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
    this.startTimer();
    this.setAnimation();
  }

  setAnimation() {
    if (this.inputValue === 90) {
      this.true90 = true;
    } else if (this.inputValue === 85) {
      this.true85 = true;
    } else if (this.inputValue === 80) {
      this.true80 = true;
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.value === this.inputValue) {
        this.stopTimer();
      } else {
        this.value++;
      }
    }, 50);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

}
