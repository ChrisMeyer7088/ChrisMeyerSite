import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-work-experince-page',
  templateUrl: './work-experince-page.component.html',
  styleUrls: ['./work-experince-page.component.scss']
})
export class WorkExperincePageComponent implements OnInit {

  public innerWidth: any;
  public gaImg: any;
  public tjcImg: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.gaImg = document.getElementById('img-ga');
    this.tjcImg = document.getElementById('img-tjc');
    this.checkImages();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.checkImages();
  }

  checkImages(){
    if(document.getElementById('img-ga') != null){
      if(this.innerWidth < 775){
        this.gaImg.remove();
        this.tjcImg.remove();
      }
    }else{
      if(this.innerWidth >= 775){
        let tjcP = document.getElementById('p-tjc');
        tjcP.insertBefore(this.tjcImg, tjcP.childNodes[0])

        let gaP = document.getElementById('p-ga');
        gaP.insertBefore(this.gaImg, gaP.childNodes[0])
      }
    }
  }

}
