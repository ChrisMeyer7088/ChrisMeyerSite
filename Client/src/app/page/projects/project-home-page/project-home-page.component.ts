import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-project-home-page',
  templateUrl: './project-home-page.component.html',
  styleUrls: ['./project-home-page.component.scss']
})
export class ProjectHomePageComponent implements OnInit {

  public pointMapGit: HTMLElement;
  public cmSiteGit: HTMLElement;
  public giftMeGit: HTMLElement;
  public pointmapTitle: HTMLElement;
  public cmSiteTitle: HTMLElement;
  public giftMeTitle: HTMLElement;
  public innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.pointMapGit = document.getElementById('gitlink-pointmap');
    this.cmSiteGit = document.getElementById('gitlink-cmsite');
    this.giftMeGit = document.getElementById('gitlink-giftme');
    this.pointmapTitle = document.getElementById('title-pointmap');
    this.cmSiteTitle = document.getElementById('title-cmsite');
    this.giftMeTitle = document.getElementById('title-giftme');

    this.innerWidth = window.innerWidth;
    this.adjustPageLayout();
  }

  @HostListener('window:resize', ['$event'])
  onresize(event){
    this.innerWidth = window.innerWidth;
    this.adjustPageLayout();
  }

  adjustPageLayout(){
    if(this.innerWidth < 990){
      this.removeLinks();
    }
    else if(this.innerWidth < 1560){
      this.addGitLinks();
    }
    else{
      this.addGitLinks();
    }
  }

  addGitLinks(){
    document.getElementById('container-pointmap').append(this.pointMapGit);
    document.getElementById('container-cmsite').append(this.cmSiteGit);
    document.getElementById('container-giftme').append(this.giftMeGit);
  }

  removeLinks(){
    this.pointMapGit.remove();
    this.cmSiteGit.remove();
    this.giftMeGit.remove();
  }
}
