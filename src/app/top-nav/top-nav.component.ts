import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  activetab = "home";

  constructor() { }

  ngOnInit(): void {
  }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }

}
