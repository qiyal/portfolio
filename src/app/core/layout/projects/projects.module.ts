import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from '../../../projects/projects.component';
import {ProjectsRoutingModule} from './projects-routing/projects-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {FooterModule} from '../footer/footer.module';
import {SliderV2Component} from '../../shared/slider-v2/slider-v2.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    SliderV2Component
  ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        MatIconModule,
        FooterModule
    ]
})
export class ProjectsModule { }
