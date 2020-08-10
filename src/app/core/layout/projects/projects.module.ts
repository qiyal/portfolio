import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from '../../../components/projects/projects.component';
import {ProjectsRoutingModule} from './projects-routing/projects-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {FooterModule} from '../footer/footer.module';
import {SliderV2Component} from '../../shared/slider-v2/slider-v2.component';
import {ProjectCardComponent} from '../../shared/project-card/project-card.component';
import {ProjectDetailComponent} from '../../../components/projects/project-detail/project-detail.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    ProjectsComponent,
    SliderV2Component,
    ProjectCardComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatIconModule,
    FooterModule,
    MatButtonToggleModule
  ]
})
export class ProjectsModule { }
