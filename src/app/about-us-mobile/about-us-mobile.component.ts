import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-us-mobile',
  templateUrl: './about-us-mobile.component.html',
  styleUrls: ['./about-us-mobile.component.scss']
})
export class AboutUsMobileComponent implements OnInit {

  constructor() { }

  @Output() clearTextEvent = new EventEmitter<string>();

  callParent(opacity: string): void {
    this.clearTextEvent.next(opacity);
  };

  ngOnInit(): void {
    const aboutUsMobileContainer = document.getElementsByClassName("about-us-mobile-container")[0];
    const singleSlide = document.getElementsByClassName("single-slide")[0];
    const scrollX = aboutUsMobileContainer.scrollLeft;
    if (scrollX > singleSlide.scrollWidth) {
      this.callParent('0.0');
    }
  }

  ngAfterContentInit(): void {
    const aboutUsMobileContainer = document.getElementById("about-us-mobile-container");
    const singleSlide = document.getElementsByClassName("single-slide")[0];
    console.log('conainer: ', aboutUsMobileContainer);
    aboutUsMobileContainer && aboutUsMobileContainer.addEventListener('scroll', () => {
      const scrollX = aboutUsMobileContainer.scrollLeft;

      // mobile screen
      // if ((scrollX === 0) || (scrollX > 0) || (scrollX < (window.innerWidth)/2)) {
      //   console.log('scrollX 1.0', scrollX);
      //   this.callParent('1.0');
      // }

      // if ((scrollX > window.innerWidth/2) && (scrollX < window.innerWidth)) {
      //   this.callParent('0.5');
      //   console.log('scrollX 0.5', scrollX);
      // }

      // if (scrollX > (window.innerWidth - 10)) {
      //   this.callParent('0.0');
      //   console.log('scrollX 0.0', scrollX);
      // }

      // web screena
      if ((scrollX === 0) || (scrollX > 0) || (scrollX < (singleSlide.scrollWidth)/2)) {
        // console.log('scrollX 1.0', scrollX);
        this.callParent('1.0');
      }

      if ((scrollX > singleSlide.scrollWidth/2) && (scrollX < singleSlide.scrollWidth)) {
        this.callParent('0.5');
        // console.log('scrollX 0.5', scrollX);
      }

      if (scrollX > (singleSlide.scrollWidth - 10)) {
        this.callParent('0.0');
        // console.log('scrollX 0.0', scrollX);
      }

    //     if (scrollX > (imageWidth*2) && scrollX >= (imageWidth*3)) {
    //       this.description = 'Jeera powder';
    //       this.productDetails = 'Freshly grinded pure Jeera';
    //       this.imgIndex1 = 2;
    //     }
    //     if (scrollX > (imageWidth*3) && scrollX >= (imageWidth*4)) {
    //       this.description = 'Rasam powder';
    //       this.productDetails = 'Red Chilli, Coriander (Dhaniya) seeds, Cumin (Jeera), Fenugreek (Meethi) seeds, Refined Oil, Black Pepper, Mustard, Hing';
    //       this.imgIndex1 = 3;
    //     }
    //     if (scrollX > (imageWidth*4) && scrollX >= (imageWidth*5)) {
    //       this.description = 'Dhaniya Powder';
    //       this.imgIndex1 = 4;
    //     }
    //     if (scrollX > (imageWidth*5) && scrollX >= (imageWidth*6)) {
    //       this.description = 'Sambar powder for Idli';
    //       this.imgIndex1 = 5;
    //     }
    //     if (scrollX > (imageWidth*6) && scrollX >= (imageWidth*7)) {
    //       this.description = 'Bisibelebath powder';
    //       this.imgIndex1 = 6;
    //       this.showNext = true
    //     }

    //     if (scrollX > (imageWidth * 7) && scrollX >= (imageWidth * 8)) {
    //       this.description = 'Vangibath Powder';
    //       this.imgIndex1 = 7;
    //       this.showNext = false;
    //     }
    });

  };

}
