import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from '../../../../components/projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
