import { Component } from '@angular/core';
// import * as projects from "../assets/projects";
//const data = require('../assets/project.json');
import * as projects from "../assets/project.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    console.log(JSON.stringify(projects))
  }
}
