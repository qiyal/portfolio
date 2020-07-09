import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../model/user';
import {DataControlService} from '../core/service/data-control.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(private service: DataControlService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      text: new FormControl('')
    });
    this.service.getUserInfo().subscribe(res => {
      this.user = res;
    })
  }

}
