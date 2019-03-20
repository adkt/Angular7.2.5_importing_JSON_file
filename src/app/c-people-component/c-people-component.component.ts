import { Component, OnInit } from '@angular/core';
import dataJSONPeople from '../mock-people.json';

@Component({
  selector: 'app-c-people-component',
  templateUrl: './c-people-component.component.html',
  styleUrls: ['./c-people-component.component.css']
})
export class CPeopleComponentComponent implements OnInit {

  personNames = (<any>dataJSONPeople).group[0].name;

  constructor() { }

  ngOnInit() {
  }

}