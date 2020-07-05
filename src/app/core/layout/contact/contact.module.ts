import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from '../../../contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from '../../../about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent}
];


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
