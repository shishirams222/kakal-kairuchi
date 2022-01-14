import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  @Input() imagesList = [];
  @Input() nameList = [];
  @Input() id = '';

  constructor() { }

  ngOnInit(): void {
    console.log('imagesList: ', this.imagesList);
    console.log('nameList: ', this.nameList);
    console.log('id: ', this.id);
  }

}
