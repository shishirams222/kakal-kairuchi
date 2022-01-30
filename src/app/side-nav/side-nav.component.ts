import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isOpen: boolean = false;

  @Output() someEvent = new EventEmitter<string>();

  callParent(option: string): void {
    this.someEvent.next(option);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
