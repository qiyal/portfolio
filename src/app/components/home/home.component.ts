import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../core/service/data-control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any[];

  constructor(private service: DataControlService) { }

  ngOnInit(): void {
    this.service.getUserInfo().subscribe(res => {
      this.user = res;
    });
  }
}
