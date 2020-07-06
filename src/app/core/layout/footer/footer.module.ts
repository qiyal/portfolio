import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../../shared/footer/footer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class FooterModule {
}
