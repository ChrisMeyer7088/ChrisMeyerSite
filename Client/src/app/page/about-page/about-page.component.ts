import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.resizeHeader();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.resizeHeader();
  }

  resizeHeader(){
    let element = document.getElementById('about-title');
    if(this.innerWidth < 750){
      element.className = 'h1-title clear-ele'
    }else{
      element.className = 'h1-title'
    }
  }

}
