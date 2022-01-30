import { Element } from '@angular/compiler';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  imgIndex1: number = 0;
  imgIndex2: number = 0;
  scrollY: number = 0;
  activeSection: number = 0;
  sectionHeight: number = 0;
  header: string = 'Enriching Delicious Memories!';
  description: string = '';
  showNav: boolean = false;
  showLeft: boolean = false;
  showRight: boolean = true;
  showHeaderButtons: boolean = true;
  showHeader: boolean = true;
  opportunitiesHeader: string = '';
  // showProductDetails: boolean = false;
  productDetails: string = '';
  imagesList1: any = ['assets/images/home_page_products/jamoon.jpg',
    'assets/images/home_page_products/chakli.jpeg',
    'assets/images/home_page_products/jeera.png', 
    'assets/images/home_page_products/rasam.jpeg', 
    'assets/images/home_page_products/daniya.png',
    'assets/images/home_page_products/idli_sambar_ina.jpeg',
    'assets/images/home_page_products/bbb.png',
    'assets/images/home_page_products/vangi_bath.jpeg'
  ];
  nameList1: any = ['Gulaab Jamoon', 'Chakli', 'Jeera', 'Rasam', 'Daniya', 'Idli Sambar', 'Bisibelebath', 'Vangibath'];


  ngOnInit(): void {
  }

  scrollNext1 () {
    const slideShowContainer = document.getElementById("slide-show-container1");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container1").scrollLeft(scrollValue + 300);
    this.imgIndex1++;
  };

  scrollPrevious1 () {
    const slideShowContainer = document.getElementById("slide-show-container1");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container1").scrollLeft(scrollValue-300);
    this.imgIndex1--;
  };

  scrollNext2 () {
    const slideShowContainer = document.getElementById("slide-show-container2");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container2").scrollLeft(scrollValue + 300);
    this.imgIndex2++;
  };

  scrollPrevious2 () {
    const slideShowContainer = document.getElementById("slide-show-container2");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container2").scrollLeft(scrollValue-300);
    this.imgIndex2--;
  };

  setOpacity (opacityValue: string) {
    $(".welcome-text").css("opacity", opacityValue);
    $(".btn-order-online-container").css("opacity", opacityValue);
  };

  public deletePhone (value: string): void {
    console.log("Clicked delete: ", value);
    var element = document.getElementById(value);
    console.log('ele: ', element);
    document.querySelector('section-one')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // setScrollCSS (section: any, index: number, scrolly: number, stepper: number) {
  //   console.log('index: ', index);
  //   console.log('scrollHeight: ', section.scrollHeight);
  //   console.log('offsetTop: ', section.offsetTop);
  //   console.log('scrollY: ', scrolly);

  //   if ((scrolly - (section.scrollHeight * index)) > ((section.scrollHeight * index) + stepper)) {
  //     this.setOpacity('0.9');
  //   }
  //   if ((scrolly - (section.scrollHeight * index)) > ((section.scrollHeight * index) + (stepper * 2))) {
  //     this.setOpacity('0.7');
  //   }
  //   if ((scrolly - (section.scrollHeight * index)) > ((section.scrollHeight * index) + (stepper * 3))) {
  //     this.setOpacity('0.5');
  //   }
  //   if ((scrolly - (section.scrollHeight * index)) > ((section.scrollHeight * index) + (stepper * 4))) {
  //     this.setOpacity('0.3');
  //   }
  //   if ((scrolly - (section.scrollHeight * index)) > ((section.scrollHeight * index) + (stepper * 5))) {
  //     this.setOpacity('0.1');
  //   }
  // };

  ngAfterContentInit() {
    (() => {
      const app = document.getElementById("main");
      const section1 = document.getElementById("section-one");
      const sections = document.getElementsByClassName("single-section");
      app && app.addEventListener('scroll', () => {
        const scrolly = app.scrollTop;
        this.scrollY = scrolly;
        const sectionHeight = section1 && section1.scrollHeight || 0;
        this.sectionHeight = sectionHeight;
        console.log('sectionHeight: ', sectionHeight);
        const stepper = sectionHeight/10;

        
        // if (sections && sections.length > 0) {
        //   var index = 0;
        //   for (index = 0; index < sections.length; index++) {
        //     // console.log('section: ', index, sections[index]);
        //     // if (scrolly > )
        //     this.setScrollCSS(sections[index], index, scrolly, stepper);

        //   }
        // }

        if (scrolly > (sectionHeight - 1)) {
          this.showNav = true;
        } else {
          this.showNav = false;
        }
        if (scrolly > stepper) {
          this.setOpacity('0.9');
        }
        if (scrolly > (stepper * 2)) {
          this.setOpacity('0.7');
        }
        if (scrolly > (stepper * 3)) {
          this.setOpacity('0.5');
        }
        if (scrolly > (stepper * 4)) {
          this.setOpacity('0.3');
        }
        if (scrolly > (stepper * 5)) {
          this.setOpacity('0.1');
          $(".header").css("color", "floralwhite");
          $(".description").css("color", "#f07138");
          this.showHeader = true;
          console.log('settingggg');
          this.showHeaderButtons = true;
          this.header = 'Our Products';
          this.description = 'Gulaab Jamoon';
          this.productDetails = 'Sugar, Refined oil, Kova, Maida, Cooking soda'; 
          // todo shishi: check if this is needed, clean up html
          // this.showProductDetails = true;
        } else if (scrolly < (stepper * 5)) {
          this.showHeader = true;
          this.header = 'Enriching Delicious Memories!';
          this.description = '';
          // this.showProductDetails = false;
          $(".header").css("color", "#f07138");
          $(".description").css("color", "black");
        }
        if (scrolly > ((stepper * 5) + sectionHeight)) {
          this.header = 'Our Products 2';
          this.description = 'Cheese ball';
        }
        if (scrolly > (stepper * 6)) {
          this.setOpacity('0.3');
        }
        if (scrolly > (stepper * 7)) {
          this.setOpacity('0.5');
        }
        if (scrolly > (stepper * 8)) {
          this.setOpacity('0.7');
        }
        if (scrolly > (stepper * 9)) {
          this.setOpacity('0.9');
        }
        if (scrolly >= (stepper * 10)) {
          this.setOpacity('0.9');
        }

        if (scrolly >= ((sectionHeight * 3) - 140)) {
          this.showHeaderButtons = false;
          this.showNav = false;
        }
        if (scrolly < ((sectionHeight * 3) - 140)) {
          this.showHeaderButtons = true;
          this.showNav = true;
        }
        if (scrolly >= (sectionHeight * 3)) {
          this.opportunitiesHeader = 'Own a Franchise';
        }

        // if (scrolly <= sectionHeight) {
        //   this.activeSection = 1;
        // }
        // if ((scrolly <= (sectionHeight * 2)) && (scrolly > sectionHeight)) {
        //   this.activeSection = 2;
        // }
        // if ((scrolly <= (sectionHeight * 3)) && (scrolly > (sectionHeight * 2))) {
        //   this.activeSection = 3;
        // }
        // if ((scrolly <= (sectionHeight * 4)) && (scrolly > (sectionHeight * 3))) {
        //   this.activeSection = 4;
        // }
        // if ((scrolly <= (sectionHeight * 5)) && (scrolly > (sectionHeight * 4))) {
        //   this.activeSection = 5;
        // }
        // if ((scrolly <= (sectionHeight * 6)) && (scrolly > (sectionHeight * 5))) {
        //   this.activeSection = 6;
        // }
        // if ((scrolly <= (sectionHeight * 7)) && (scrolly > (sectionHeight * 6))) {
        //   this.activeSection = 7;
        // }
      });

      const slideShowContainer = document.getElementById("slide-show-container1");
      const image1 = document.getElementById("image-one");
      slideShowContainer && slideShowContainer.addEventListener('scroll', () => {
        const scrollX = slideShowContainer.scrollLeft;
        const imageWidth = image1?.scrollWidth || 0;

        if ((scrollX === 0)) {
          this.description = 'Gulab Jamun';
          this.productDetails = 'Sugar, Refined oil, Kova, Maida, Cooking soda'; 
          this.showLeft = false;
          this.showRight = true;
          this.showHeader = true;
          $(".header").css("color", "floralwhite");
          this.imgIndex1 = 0;
          // this.showProductDetails = true;
        }

        if ((scrollX > 0) && (scrollX <= imageWidth)) {
          this.description = 'Chakli Sticks';
          this.productDetails = 'Rice, Urad Dal, Chilli Powder, Refined Oil, White Til, Ajwain (om), Jeera, Fenugreek (Meethi) seeds';
          this.showLeft = true;
          this.showRight = true;
          this.showHeader = false;
          this.imgIndex1 = 1;
        }

        if (scrollX > (imageWidth) && scrollX <= (imageWidth * 2)) {
          this.description = 'Jeera powder';
          this.productDetails = 'Freshly grinded pure Jeera';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex1 = 2;
        }
        if (scrollX > (imageWidth*2) && scrollX >= (imageWidth*3)) {
          this.description = 'Rasam powder';
          this.productDetails = 'Red Chilli, Coriander (Dhaniya) seeds, Cumin (Jeera), Fenugreek (Meethi) seeds, Refined Oil, Black Pepper, Mustard, Hing';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex1 = 3;
        }
        if (scrollX > (imageWidth*3) && scrollX >= (imageWidth*4)) {
          this.description = 'Dhaniya Powder';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex1 = 4;
        }
        if (scrollX > (imageWidth*4) && scrollX >= (imageWidth*5)) {
          this.description = 'Sambar powder for Idli';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex1 = 5;
        }
        if (scrollX > (imageWidth*5) && scrollX >= (imageWidth*6)) {
          this.description = 'Bisibelebath powder';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex1 = 6;
        }
        if (scrollX > (imageWidth*6) && scrollX >= (imageWidth*7)) {
          this.description = 'Vangibath Powder';
          this.showLeft = true;
          this.showRight = false;
          this.imgIndex1 = 7;
        }
      });

      const slideShowContainer2 = document.getElementById("slide-show-container2");
      slideShowContainer2 && slideShowContainer2.addEventListener('scroll', () => {
        const scrollX = slideShowContainer2.scrollLeft;
        const imageWidth = image1?.scrollWidth || 0;

        if ((scrollX === 0)) {
          this.description = 'Cheese Ball';
          this.showLeft = false;
          this.showRight = true;
          this.showHeader = true;
          $(".header").css("color", "floralwhite");
          this.imgIndex2 = 0;
        }

        if ((scrollX > 0) && (scrollX <= imageWidth)) {
          this.description = 'Grilled garlic Paneer';
          this.showLeft = true;
          this.showRight = true;
          this.showHeader = false;
          this.imgIndex2 = 1;
        }

        if (scrollX > (imageWidth) && scrollX <= (imageWidth*2)) {
          this.description = 'BBQ Paneer';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex2 = 2;
        }
        if (scrollX > (imageWidth*2) && scrollX >= (imageWidth*3)) {
          this.description = 'Peas cutlet';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex2 = 3;
        }
        if (scrollX > (imageWidth*3) && scrollX >= (imageWidth*4)) {
          this.description = 'Masala Dosa';
          this.showLeft = true;
          this.showRight = true;
          this.imgIndex2 = 4;
        }
      });

      // const sections = document.getElementsByClassName("single-section");
      // if (sections && sections.length > 0) {
      //   var index = 0;
      //   for (index = 0; index < sections.length; index++) {
      //     // console.log('section: ', index, sections[index]);
      //     this.setScrollCSS(sections[index]);
      //   }
      // }
      
    })()
  };

}
