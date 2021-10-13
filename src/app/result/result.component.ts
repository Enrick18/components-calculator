import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() num1:any;
  @Input() num2:any;
  @Input() operation="";

  result!:number;

  Evaluate(){
    if (this.operation === "+")
     this.result = this.num1 + this.num2;
    else if (this.operation === "-")
     this.result = this.num1 - this.num2;
    else if (this.operation === "*")
     this.result = this.num1 * this.num2;
    else if (this.operation === "/")
     this.result = this.num1 / this.num2;
 }
}
