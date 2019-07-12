import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../page/home-page/home-page.component'
import { AboutPageComponent } from '../page/about-page/about-page.component';
import { WorkExperincePageComponent } from '../page/work-experince-page/work-experince-page.component';
import { GiftmePageComponent } from '../page/projects/giftme-page/giftme-page.component';
import { PointmapPageComponent } from '../page/projects/pointmap-page/pointmap-page.component';
import { CmSitePageComponent } from '../page/projects/cm-site-page/cm-site-page.component';
import { ProjectHomePageComponent } from '../page/projects/project-home-page/project-home-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'experience', component: WorkExperincePageComponent},
  {path: 'projects', children: [
    {path: '', component: ProjectHomePageComponent},
    {path: 'pointmap', component: PointmapPageComponent},
    {path: 'giftme', component: GiftmePageComponent},
    {path: 'cmSite', component: CmSitePageComponent}
  ]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
