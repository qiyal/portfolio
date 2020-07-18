import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../core/service/data-control.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../model/Project';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private service: DataControlService,
    private route: ActivatedRoute,
    iconRegistry: MatIconRegistry,
    sanitized: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'git_hub',
      sanitized.bypassSecurityTrustResourceUrl('../../assets/icons/home/github-black.svg')
    );
  }

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getProjectById(id).subscribe(res => {
      this.project = res;
    });
  }

}
