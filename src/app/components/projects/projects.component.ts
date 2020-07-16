import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {DataControlService} from '../../core/service/data-control.service';
import {Page} from '../../model/Page';
import {Project} from '../../model/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  filter = 'all';
  page: any = null;
  url = '/projects';
  pages;

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
    this.getProjectsByTypePaginator();
  }

  filterSet(str: string) {
    if (str === 'all') {
      this.filter = str;
      this.url = '/projects';
    } else {
      this.filter = str;
      this.url = '/projects?' + 'type=' + this.filter;
    }
    this.getProjectsByTypePaginator();
  }

  getProjectsByTypePaginator() {
    this.service.getProjectsByTypePagination(this.url).subscribe(res => {
      this.page = res;
      this.pages = new Array(this.page.totalPages);
    });
  }

  showPage(i: number) {
    if (this.filter === 'all') {
      this.url = '/projects?page=' + i;
    } else {
      this.url = '/projects?type=' + this.filter + '&page=' + i;
    }
    this.getProjectsByTypePaginator();
  }

  showPrev() {
    if (this.page.currentPage > 0) {
      this.url = this.filter === 'all' ? '/projects?page=' + (this.page.currentPage - 1) : '/projects?type=' + this.filter + '&page=' + (this.page.currentPage - 1);
      this.getProjectsByTypePaginator();
    }
  }

  showNext() {
    if (this.page.currentPage < this.page.totalPages - 1) {
      this.url = this.filter === 'all' ? '/projects?page=' + (this.page.currentPage + 1) : '/projects?type=' + this.filter + '&page=' + (this.page.currentPage + 1);
      this.getProjectsByTypePaginator();
    }
  }
}
