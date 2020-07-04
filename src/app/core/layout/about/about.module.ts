import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from '../../../about/about.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {CircleDiagramComponent} from '../../shared/circle-diagram/circle-diagram.component';
import {FormsModule} from '@angular/forms';
import {SliderComponent} from '../../shared/slider/slider.component';
import {FooterModule} from '../footer/footer.module';

const routes: Routes = [
  { path: '', component: AboutComponent}
];

@NgModule({
  declarations: [
    AboutComponent,
    CircleDiagramComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    FooterModule
  ],
  exports: [
  ]
})
export class AboutModule { }
