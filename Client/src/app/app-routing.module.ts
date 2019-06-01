import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { WorkExperincePageComponent } from './work-experince-page/work-experince-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', children: [
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'projects', component: ProjectsPageComponent},
    {path: 'experince', component: WorkExperincePageComponent}
  ]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
