import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() Operational=new EventEmitter<string>();

  operation="";

  AddFunct(){
    this.operation="+";
    this.Operational.emit(this.operation);
  }

  MinusFunct(){
    this.operation="-";
    this.Operational.emit(this.operation);
  }

  MultiFunct(){
    this.operation="*";
    this.Operational.emit(this.operation);
  }

  DivideFunct(){
    this.operation="/";
    this.Operational.emit(this.operation);
  }
}
