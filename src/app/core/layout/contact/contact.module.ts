import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from '../../../components/contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactRoutingModule} from './contact-routing/contact-routing.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FooterModule
  ]
})
export class ContactModule {
}
