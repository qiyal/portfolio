import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from '../../../contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {FooterModule} from '../footer/footer.module';

const routes: Routes = [
  { path: '', component: ContactComponent}
];


@NgModule({
  declarations: [
    ContactComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        ReactiveFormsModule,
        FooterModule
    ]
})
export class ContactModule { }
