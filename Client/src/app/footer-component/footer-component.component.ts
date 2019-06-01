import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {
  currentDate: string;
  constructor() { }

  ngOnInit() {
    this.getCurrentDate();
  }

  getCurrentDate(){
    let temp = new Date;
    this.currentDate = temp.toDateString();
  }

}
