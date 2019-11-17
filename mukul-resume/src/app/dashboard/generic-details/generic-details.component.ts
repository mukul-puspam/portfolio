import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-details',
  templateUrl: './generic-details.component.html',
  styleUrls: ['./generic-details.component.css']
})
export class GenericDetailsComponent implements OnInit {

  @Input() public value: any;
  constructor() { }

  ngOnInit() {
    
    console.log(this.value);
  }

}
