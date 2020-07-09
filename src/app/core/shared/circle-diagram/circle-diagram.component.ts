import {Component, Input, OnInit} from '@angular/core';
import {Skill} from '../../../model/skill';

@Component({
  selector: 'app-circle-diagram',
  templateUrl: './circle-diagram.component.html',
  styleUrls: ['./circle-diagram.component.css']
})
export class CircleDiagramComponent implements OnInit {
  value = 0;
  timer;
  @Input() skill: Skill;

  constructor() {
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.value === this.skill.percentage) {
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
