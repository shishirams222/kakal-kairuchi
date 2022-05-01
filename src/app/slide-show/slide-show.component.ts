import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  @Input() imagesList = <any[]>([]);
  @Input() nameList = [];
  @Input() id = '';
  @Input() pageDescription = {};
  @Input() slideShowIndex = 0;
  // @Input() slideShowInfo = '';

  showHeader: boolean = false;
  productDetails: string = '';
  description: string = '';
  showLeft: boolean = true;
  showRight: boolean = true;
  imgIndex1: number = 0;
  showNext: boolean = true;
  slideShowId: string = '';

  constructor() { }
  @Output() clearTextEvent = new EventEmitter<string>();

  callParent(opacity: string): void {
    // console.log('opacity: ', opacity);
    // var headerConditions = {
    //   opacity: opacity,
    //   showHeader: this.showHeader
    // };
    this.clearTextEvent.next(opacity);
  };

  ngOnInit(): void {
    this.slideShowId = 'slide-show-container' + this.slideShowIndex;
    const slideShowContainer = document.getElementsByClassName("slide-show-container")[this.slideShowIndex];
    const singleSlide = document.getElementsByClassName("single-slide")[0];
    const scrollX = slideShowContainer.scrollLeft;
    if (scrollX > singleSlide.scrollWidth) {
      this.callParent('0.0');
    }
  };

  scrollNext () {
    const slideShowContainer = document.getElementById("slide-show-container");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container").scrollLeft(scrollValue + 300);
    this.imgIndex1++;
  };

  scrollPrevious () {
    const slideShowContainer = document.getElementById("slide-show-container");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container").scrollLeft(scrollValue-300);
    this.imgIndex1--;
  };

  ngAfterContentInit(): void {
    const slideShowContainer = document.getElementsByClassName("slide-show-container")[this.slideShowIndex];
    const singleSlide = document.getElementsByClassName("single-slide")[0];
    // console.log('conainer: ', singleSlide.scrollWidth);
    slideShowContainer && slideShowContainer.addEventListener('scroll', () => {
      const scrollX = slideShowContainer.scrollLeft;

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

      // web screen
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
