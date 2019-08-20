import { Component, OnInit} from '@angular/core';
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
  outlineImage: HTMLImageElement = new Image();

  constructor() { }

  ngOnInit() {
    this.canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    this.addEventListenersToCanvas();
    this.initalizeContext();
   }

   addEventListenersToCanvas() {
    this.canvas.addEventListener("mousedown", this.mouseDown.bind(this), false);
    this.canvas.addEventListener("mousemove", this.mouseMove.bind(this), false);
    this.canvas.addEventListener("mouseup", this.disablePainting.bind(this), false);
    this.canvas.addEventListener("mouseleave", this.disablePainting.bind(this), false);
   }

   initalizeContext() {
    this.context = this.canvas.getContext("2d");
    this.context.lineWidth = 5;
    this.context.lineJoin = "round";
   }

  mouseDown(event: MouseEvent) {
    this.dragging = false;
    this.painting = true;
    this.mouseMove(event);
  }

  mouseMove(event: MouseEvent) {
    if(this.painting){
      let canvasMouseX = event.pageX - this.canvas.getBoundingClientRect().left;
      let canvasMouseY = event.pageY - this.canvas.getBoundingClientRect().top;
      this.drawPoints.push(<drawPoint>{
        xLoc: canvasMouseX,
        yLoc: canvasMouseY,
        dragging: this.dragging,
        clickColor: this.color
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
      this.context.strokeStyle = this.drawPoints[i].clickColor;
      this.context.closePath();
      this.context.stroke();
    }

  }

  disablePainting(event: MouseEvent) {
    this.painting = false;
    this.mouseMove(event);
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

  addChickenToCanvas() {
    this.clearDrawing();
    this.outlineImage.src = "../../../assets/static/images/gamingPageImages/chickenOutline.jpeg"
    this.outlineImage.onload = () => {
      this.context.drawImage(this.outlineImage, 0, 0, this.context.canvas.width, this.context.canvas.height);
    }
  }

  addCowToCanvas() {
    this.clearDrawing();
    this.outlineImage.src = "../../../assets/static/images/gamingPageImages/cowOutline.gif"
    this.outlineImage.onload = () => {
      this.context.drawImage(this.outlineImage, 0, 0, this.context.canvas.width, this.context.canvas.height);
    }
  }
}

interface drawPoint {
    xLoc: number;
    yLoc: number;
    dragging: boolean;
    clickColor: string;
}
