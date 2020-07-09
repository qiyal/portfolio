import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {DataControlService} from '../core/service/data-control.service';
import {User} from '../model/user';
import {Education} from '../model/education';
import {Skill} from '../model/skill';
import {Experience} from '../model/Experience';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dataCardEducation: Education[];
  dataCardExperience: Experience[];
  skills: Skill[];
  user: User;

  constructor(iconRegistry: MatIconRegistry, sanitized: DomSanitizer, private service: DataControlService) {
    iconRegistry.addSvgIcon(
      'download_custom',
      sanitized.bypassSecurityTrustResourceUrl('../../assets/icons/about/cloud-computing.svg')
    );
  }

  ngOnInit(): void {
    this.service.getUserInfo().subscribe(res => {
      this.user = new User(res);
    });
    this.service.getAllEducation().subscribe(res => {
      this.dataCardEducation = res;
    });
    this.service.getAllExperience().subscribe(res => {
      this.dataCardExperience = res;
    });
    this.service.getAllSkills().subscribe(res => {
      this.skills = res;
    });
  }

}
