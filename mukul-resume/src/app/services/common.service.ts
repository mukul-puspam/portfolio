import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@ Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getResumeService() {
    return this.http.get('../../assets/json/resume.json');
  }

  getMyAppService() {
    return this.http.get('../../assets/json/myApps.json');
  }

}
