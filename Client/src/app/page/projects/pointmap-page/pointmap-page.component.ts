import { Component, OnInit, HostListener, Host } from '@angular/core';

@Component({
  selector: 'app-pointmap-page',
  templateUrl: './pointmap-page.component.html',
  styleUrls: ['./pointmap-page.component.scss']
})
export class PointmapPageComponent implements OnInit {

  public innerWidth: any;
  public appLaunchGif: HTMLElement;
  public loggingGif: HTMLElement;
  public mapviewGif: HTMLElement;
  public pointEditorGif: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.appLaunchGif = document.getElementById('gif-applaunch');
    this.loggingGif = document.getElementById('gif-logging');
    this.mapviewGif = document.getElementById('gif-mapview');
    this.pointEditorGif = document.getElementById('gif-pointeditor');

    this.innerWidth = window.innerWidth;
    this.adjustLayout();
  }

  @HostListener('window:resize', ['$event'])
  onresize(event){
    this.innerWidth = window.innerWidth;
    this.adjustLayout();
  }

  adjustLayout(){
    if(this.innerWidth < 1000){
      this.removeGifs();
      this.addGifsSmallVW();
    }else{
      this.removeGifs();
      this.addGifsLargeVW();
    }
  }

  removeGifs(){
    this.appLaunchGif.remove();
    this.loggingGif.remove();
    this.mapviewGif.remove();
    this.pointEditorGif.remove();
  }

  addGifsSmallVW(){
    let containerAppLaunch = document.getElementById('container-applaunch');
    let containerLogging = document.getElementById('container-logging');
    let containerMapView = document.getElementById('container-mapview');
    let containerPointEditor = document.getElementById('container-pointeditor');

    this.appLaunchGif.className = 'img-gif-sm';
    this.loggingGif.className = 'img-gif-sm';
    this.mapviewGif.className = 'img-gif-sm';
    this.pointEditorGif.className = 'img-gif-sm';

    containerAppLaunch.parentElement.insertBefore(this.appLaunchGif, containerAppLaunch.nextSibling);
    containerLogging.parentElement.insertBefore(this.loggingGif, containerLogging.nextSibling);
    containerMapView.parentElement.insertBefore(this.mapviewGif, containerMapView.nextSibling);
    containerPointEditor.parentElement.insertBefore(this.pointEditorGif, containerPointEditor.nextSibling);
  }

addGifsLargeVW(){
    let pAppLaunch = document.getElementById('p-applaunch');
    let pLogging = document.getElementById('p-logging');
    let pMapView = document.getElementById('p-mapview');
    let pPointEditor = document.getElementById('p-pointeditor');

    this.appLaunchGif.className = 'img-gif';
    this.loggingGif.className = 'img-gif';
    this.mapviewGif.className = 'img-gif';
    this.pointEditorGif.className = 'img-gif';

    pAppLaunch.insertBefore(this.appLaunchGif, pAppLaunch.firstChild);
    pLogging.insertBefore(this.loggingGif, pLogging.firstChild);
    pMapView.insertBefore(this.mapviewGif, pMapView.firstChild);
    pPointEditor.insertBefore(this.pointEditorGif, pPointEditor.firstChild);
  }
}
