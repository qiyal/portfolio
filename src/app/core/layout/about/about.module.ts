import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from '../../../about/about.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CircleDiagramComponent} from '../../shared/circle-diagram/circle-diagram.component';
import {FormsModule} from '@angular/forms';
import {SliderComponent} from '../../shared/slider/slider.component';
import {AboutRoutingModule} from './about-routing/about-routing.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  declarations: [
    AboutComponent,
    CircleDiagramComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    FooterModule
  ],
  exports: [
  ]
})
export class AboutModule { }
