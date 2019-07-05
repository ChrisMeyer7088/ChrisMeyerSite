import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './page/home-page/home-page.component'
import { AboutPageComponent } from './page//about-page/about-page.component';
import { ProjectsPageComponent } from './page//projects-page/projects-page.component';
import { WorkExperincePageComponent } from './page//work-experince-page/work-experince-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'experince', component: WorkExperincePageComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
