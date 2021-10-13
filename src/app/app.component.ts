import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-calculator';
  userInput1="";
  userInput2="";
  operation="";

  //userInput
  receivedInput1($event:any){
    this.userInput1=$event;
  }
  receivedInput2($event:any){
    this.userInput2=$event;
  }

  //Operation
  AddRev($event:any){
    this.operation=$event;
  }
  MinRev($event:any){
    this.operation=$event;
  }
  MultRev($event:any){
    this.operation=$event;
  }
  DivRev($event:any){
    this.operation=$event;
  }

}
