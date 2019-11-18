import { Router } from '@angular/router';
import { CommonService } from './../services/common.service';
import { Myapps } from './../model/myapp.model';
import { Component, OnInit, Input } from '@angular/core';

@ Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.css']
})
export class MyAppsComponent implements OnInit {


  private value: Myapps;
  constructor(private commonService: CommonService,
              private router: Router) { }

  ngOnInit() {
    this.getMyApps();
  }

  getMyApps() {
    this.commonService.getMyAppService().toPromise().then(
      res => {
        this.value = res as Myapps;
        console.log(this.value);
      }
    ).catch(
      res => this.router.navigate['app-error-page']
    );
  }
}
