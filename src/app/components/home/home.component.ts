import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../core/service/data-control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any[];
  start = true;

  constructor(private service: DataControlService) { }

  ngOnInit(): void {
    this.service.getUserInfo().subscribe(res => {
      this.user = res;
    });
    this.startAnimation();
  }

  startAnimation() {
    setInterval(() => {
      this.start = this.start ? false : true;
      console.log(this.start);
    }, 1000);
  }

}
