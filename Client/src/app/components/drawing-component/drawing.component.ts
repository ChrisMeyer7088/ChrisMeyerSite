import { Component, OnInit, HostListener} from '@angular/core';
import { CONTEXT } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'drawing-game',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})

export class DrawingGame implements OnInit {
  context: CanvasRenderingContext2D;
  dragging: boolean = false;
  paintColor: string = "black";
  canvas: HTMLCanvasElement;
  drawPoints: drawPoint[] = [];
  painting: boolean = false;
  color: string = "#df4b26";
  lineWidth: number = 5;
  outlineImage: HTMLImageElement = new Image();
  innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    this.addEventListenersToCanvas();
    this.initalizeContext();
    this.innerWidth = window.innerWidth;
    this.resizeEasel();
   }

   addEventListenersToCanvas() {
    this.canvas.addEventListener("mousedown", this.mouseDown.bind(this), false);
    this.canvas.addEventListener("mousemove", this.mouseMove.bind(this), false);
    this.canvas.addEventListener("mouseup", this.disablePainting.bind(this), false);
    this.canvas.addEventListener("mouseleave", this.disablePainting.bind(this), false);

    this.canvas.addEventListener("touchstart", this.fingerDown.bind(this), false);
    this.canvas.addEventListener("touchmove", this.fingerMoving.bind(this), false);
    this.canvas.addEventListener("touchend", this.fingerUp.bind(this), false);
   }

   initalizeContext() {
    this.context = this.canvas.getContext("2d");
    this.context.lineJoin = "round";
   }

  mouseDown(event: MouseEvent) {
    this.dragging = false;
    this.painting = true;
    this.addDrawPoint(event.pageX, event.pageY);
  }

  fingerDown(event: TouchEvent) {
    this.dragging = false;
    this.painting = true;
    for(let i = 0; i < event.changedTouches.length; i++) {
      this.addDrawPoint(event.changedTouches[i].pageX, event.changedTouches[i].pageY);
    }
  }

  fingerMoving(event: TouchEvent) {
    for(let i = 0; i < event.changedTouches.length; i++) {
      this.addDrawPoint(event.changedTouches[i].pageX, event.changedTouches[i].pageY);
    }
  }

  fingerUp(event: TouchEvent) {
    this.painting = false;
    for(let i = 0; i < event.changedTouches.length; i++) {
      this.addDrawPoint(event.changedTouches[i].pageX, event.changedTouches[i].pageY);
    }
  }

  mouseMove(event: MouseEvent) {
    this.addDrawPoint(event.pageX, event.pageY);
  }

  addDrawPoint(pageX: number, pageY: number) {
    if(this.painting){
      let canvasMouseX = pageX - this.canvas.getBoundingClientRect().left;
      let canvasMouseY = pageY - this.canvas.getBoundingClientRect().top;
      this.drawPoints.push(<drawPoint>{
        xLoc: canvasMouseX,
        yLoc: canvasMouseY,
        dragging: this.dragging,
        clickColor: this.color,
        lineSize: this.lineWidth
      })
      this.dragging = true;
      this.paint();
    }
  }

  paint() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.context.drawImage(this.outlineImage, 0, 0, this.context.canvas.width, this.context.canvas.height);

    for(let i = 0; i < this.drawPoints.length; i++) {
      this.context.beginPath();
      if(i && this.drawPoints[i].dragging){
        this.context.moveTo(this.drawPoints[i - 1].xLoc, this.drawPoints[i - 1].yLoc);
      } else {
        this.context.moveTo(this.drawPoints[i].xLoc - 1, this.drawPoints[i].yLoc);
      }
      this.context.lineTo(this.drawPoints[i].xLoc, this.drawPoints[i].yLoc)
      this.context.lineWidth = this.drawPoints[i].lineSize;
      this.context.strokeStyle = this.drawPoints[i].clickColor;
      this.context.closePath();
      this.context.stroke();
    }

  }

  disablePainting(event: MouseEvent) {
    this.painting = false;
    this.addDrawPoint(event.pageX, event.pageY);
  }

  clearDrawing() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.drawPoints = []
    this.outlineImage = new Image();
  }

  changeToWhite() {
    this.color = "white"
  }

  changeToBlack() {
    this.color = "black"
  }

  changeToGreen() {
    this.color = "green"
  }

  changeToRed() {
    this.color = "red"
  }

  changeToBlue() {
    this.color = "blue"
  }

  changeToYellow() {
    this.color = "yellow"
  }

  changeSizeToSmall() {
    this.lineWidth = 5;
  }

  changeSizeToMedium() {
    this.lineWidth = 10;

  }

  changeSizeToLarge() {
    this.lineWidth = 15;
  }

  addChickenToCanvas() {
    this.outlineImage.src = "../../../assets/static/images/gamingPageImages/chickenOutline.jpeg"
    this.outlineImage.onload = () => {
      this.context.drawImage(this.outlineImage, 0, 0, this.context.canvas.width, this.context.canvas.height);
    }
  }

  addCowToCanvas() {
    this.outlineImage.src = "../../../assets/static/images/gamingPageImages/cowOutline.gif"
    this.outlineImage.onload = () => {
      this.context.drawImage(this.outlineImage, 0, 0, this.context.canvas.width, this.context.canvas.height);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.resizeEasel();
  }

  resizeEasel(){
    let easel = document.getElementById('img-easel');
    let container = document.getElementById('container-easel');
    if(this.innerWidth < 850){
      easel.className = 'img-easel-sm'
      container.className = 'img-easel-sm'
      this.canvas.height = 207;
      this.canvas.width = 159;
      this.canvas.className = 'canvas-sm'
    }else{
      easel.className = 'img-easel-lg'
      container.className = 'img-easel-lg'
      this.canvas.height = 349;
      this.canvas.width = 294;
      this.canvas.className = 'canvas-lg'
    }
  }
}

interface drawPoint {
    xLoc: number;
    yLoc: number;
    dragging: boolean;
    clickColor: string;
    lineSize: number;
}
