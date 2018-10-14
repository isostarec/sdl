import { Component, OnInit } from '@angular/core';
import { Query } from '../models/query/query';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serverNname = 'example';

  constructor() { }

  ngOnInit() {
  }

}
