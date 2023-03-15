import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalFired = new EventEmitter<number>();
  interval:any;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() =>{

    }, 1000)

  }

  @Output() onChanged = new EventEmitter<boolean>()

  // @Output() onChanged = new EventEmitter<boolean>();
  //
  // change(increased:any) {
  //   this.onChanged.emit(increased)
  // }

  change(increased:any){
    this.onChanged.emit(increased)
  }


}
