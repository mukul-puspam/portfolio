import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {

  @Input() public value: string;

  constructor() { }

  ngOnInit() {
    // for ( let keys of Object.keys(this.value)) {
    //   console.log(this.value);
    //   console.log(keys);
    //   console.log(this.value[keys]);
    // };

  }

}
