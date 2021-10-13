import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  user1="";
  user2="";

  @Output() sendInput1 =new EventEmitter<string>();
  @Output() sendInput2 =new EventEmitter<string>();

  sendUser1(){
    this.sendInput1.emit(this.user1);
  }

  sendUser2(){
    this.sendInput2.emit(this.user2);
  }

}
