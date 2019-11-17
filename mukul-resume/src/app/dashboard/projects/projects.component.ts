import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Resume } from '../../model/resume.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnChanges {

  @Input() public value: Resume;
  constructor() { }

  ngOnChanges() {
    console.log(this.value);
  }

}
