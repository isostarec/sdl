import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Query } from '../models/query/query';
import { QueryListComponent } from '../queryes/query-list/query-list.component';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  query = new Query();

  @Output() submitQueryEvent = new EventEmitter<Query>();

  submitQuery(){
    if(!this.query.name){
      return alert("Please insert query name");
    }
    alert("Query Submitted with name \"" + this.query.name + "\"");
    this.submitQueryEvent.emit(this.query);
  }

  ngOnInit() {

  }

}
