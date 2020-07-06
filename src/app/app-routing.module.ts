import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', loadChildren: () => import('./core/layout/about/about.module').then(m => m.AboutModule)},
  {path: 'contact', loadChildren: () => import('./core/layout/contact/contact.module').then(m => m.ContactModule)},
  {path: 'projects', loadChildren: () => import('./core/layout/projects/projects.module').then(m => m.ProjectsModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
