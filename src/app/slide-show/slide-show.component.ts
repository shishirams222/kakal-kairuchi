import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  @Input() imagesList = <any[]>([]);
  @Input() nameList = [];
  @Input() id = '';
  // @Input() slideShowInfo = '';

  showHeader: boolean = false;
  productDetails: string = '';
  description: string = '';
  showLeft: boolean = true;
  showRight: boolean = true;
  imgIndex1: number = 0;
  showNext: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

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
    // const slideShowContainer = document.getElementById("slide-show-container1");
    //   const image1 = document.getElementById("image-one");
    //   slideShowContainer && slideShowContainer.addEventListener('scroll', () => {
    //     const scrollX = slideShowContainer.scrollLeft;
    //     const imageWidth = image1?.scrollWidth || 0;

    //     if ((scrollX === 0)) {
    //       this.showHeader = true;
    //       this.productDetails = '';
    //       this.description = '';
    //     }

    //     if ((scrollX > 0) && (scrollX <= imageWidth)) {
    //       this.description = 'Gulab Jamun';
    //       this.productDetails = 'Sugar, Refined oil, Kova, Maida, Cooking soda'; 
    //       $(".header").css("color", "black");
    //       this.imgIndex1 = 0;
    //     }

    //     if (scrollX > (imageWidth) && scrollX <= (imageWidth * 2)) {
    //       this.description = 'Chakli Sticks';
    //       this.productDetails = 'Rice, Urad Dal, Chilli Powder, Refined Oil, White Til, Ajwain (om), Jeera, Fenugreek (Meethi) seeds';
    //       this.showHeader = false;
    //       this.imgIndex1 = 1;
    //     }

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
      // });

  };

}
