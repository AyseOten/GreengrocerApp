import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerArray:Array<any>;
  @Output() sendImage:EventEmitter<any> = new EventEmitter<any>();

  displayArr = [];
  index=1;
  rightButtonDisable = false;
  leftButtonDisable = true;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.headerArray.slice(0,6)) ;
    this.displayArr=this.headerArray.slice(0,6);
    //console.log(this.displayArr);
  }

  addNewItem(value) {
    this.sendImage.emit(value);
  }

  rightclick() {
      this.displayArr = [];
      for(let j=this.index;j<this.index+6;j++){
        if(this.headerArray[j]) {
          this.displayArr.push(this.headerArray[j]);
        }
      }
      if(this.index < 6){
        this.index = this.index+1;
      }
      else{
        this.rightButtonDisable = true;
      }
      this.leftButtonDisable = false;
      //console.log(this.displayArr);
      //console.log(this.index);
  }

  leftclick(){
    console.log(this.index);
    if(this.index>1) {
      this.displayArr = [];
      this.index = this.index-1;
      for(let i=this.index-1;i<this.index+6;i++){
        if(this.headerArray[i]) {
          this.displayArr.push(this.headerArray[i]);
        }
      }
    }
    if(this.index<=1) {
      this.leftButtonDisable = true;
    }
    this.rightButtonDisable = false;
    //console.log(this.displayArr);
    //console.log(this.index);
  }

}
