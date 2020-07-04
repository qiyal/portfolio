import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {element} from 'protractor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dataCardEducation: any[];

  constructor(iconRegistry: MatIconRegistry, sanitized: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'download_custom',
      sanitized.bypassSecurityTrustResourceUrl('../../assets/icons/about/cloud-computing.svg')
    );
  }

  ngOnInit(): void {

  }

}
