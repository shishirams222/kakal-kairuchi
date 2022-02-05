import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  activetab = "home";

  constructor() { }

  @Input() activeSection: number = 1;

  ngOnInit(): void {
  }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }

  ngAfterContentInit() {
    (() => {
      const app = document.getElementById("main");
      app && app.addEventListener('scroll', () => {
        const scrolly = app.scrollTop;
        if(scrolly > 4) {
          $(".top-nav-container").addClass("active");
        } else {
          //remove the background property so it comes transparent again (defined in your css)
          $(".top-nav-container").removeClass("active");
          
        }
      });
    })()
  };
}
