import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {DataControlService} from '../../core/service/data-control.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  filter = 'all';
  projectsArr: any[];

  constructor(iconRegistry: MatIconRegistry, sanitized: DomSanitizer, private service: DataControlService) {
    iconRegistry.addSvgIcon(
      'websites_custom',
      sanitized.bypassSecurityTrustResourceUrl('../../assets/icons/projects/websites.svg')
    );
    iconRegistry.addSvgIcon(
      'desktop-apps_custom',
      sanitized.bypassSecurityTrustResourceUrl('../../assets/icons/projects/desktop-app.svg')
    );
    iconRegistry.addSvgIcon(
      'games_custom',
      sanitized.bypassSecurityTrustResourceUrl('../../assets/icons/projects/game-controller.svg')
    );
    iconRegistry.addSvgIcon(
      'bots_custom',
      sanitized.bypassSecurityTrustResourceUrl('../../assets/icons/projects/bot.svg')
    );
  }

  ngOnInit(): void {
    this.service.getAllProjects().subscribe(res => {
      this.projectsArr = res;
      console.log(this.projectsArr);
    });
  }

  filterSet(str: string) {
    this.filter = str;
  }
}
