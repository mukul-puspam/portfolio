import { Myapps } from './../model/myapp.model';
import { Component, OnInit } from '@angular/core';
import { Resume } from '../model/resume.model';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private projects: boolean ;
  private academics: boolean;
  private achievements: boolean;
  private responsibility: boolean;
  private qualities: boolean;
  private personaldetails: boolean;
  private profile: boolean;
  private technical: boolean;
  private resume: Resume;
  constructor(private commonService: CommonService,
              private router: Router) { }

  ngOnInit() {
    this.projects = false;
    this.academics = false;
    this.achievements = false;
    this.responsibility = false;
    this.qualities = false;
    this.personaldetails = false;
    this.profile = false;
    this.technical = false;
    this.getResume();
  }

  getResume() {
    // for http call
    this.commonService.getResumeService().toPromise().then(
      res => {
        this.resume = res as Resume;
        console.log(this.resume);
      }
    ).catch(
      res => this.router.navigate['app-error-page']
    );
  }

  navigate(content: string) {
    this.projects = false;
    this.academics = false;
    this.achievements = false;
    this.responsibility = false;
    this.qualities = false;
    this.personaldetails = false;
    this.profile = false;
    this.technical = false;
    if (content === 'projects') {
      this.projects = true;
    } else if (content === 'academics') {
      this.academics = true;
    } else if (content === 'achievements') {
      this.achievements = true;
    } else if (content === 'responsibility') {
      this.responsibility = true;
    } else if (content === 'qualities') {
      this.qualities = true;
    } else if (content === 'personaldetails') {
      this.personaldetails = true;
    } else if (content === 'profile') {
      this.profile = true;
    } else if (content === 'technical') {
      this.technical = true;
    }
  }
}
