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
  activeSection: number = 1;
  sectionHeight: number = 0;
  header: string = 'Curating tastes for life!';
  description: string = '';
  showNav: boolean = false;
  showLeft: boolean = false;
  showRight: boolean = true;
  showHeaderButtons: boolean = true;
  showHeader: boolean = true;
  opportunitiesHeader: string = '';
  productDetails: string = '';
  slideShow1Data: any = [
    {
      imgUrl: 'assets/images/home_page_products/jamoon.jpg',
      productName: 'Gulab Jamun',
      description: 'Sugar, Refined oil, Kova, Maida, Cooking soda'
    },
    {
      imgUrl: 'assets/images/home_page_products/chakli.jpeg',
      productName: 'Chakli',
      description: 'Rice, Urad Dal, Chilli Powder, Refined Oil, White Til, Ajwain (om), Jeera, Fenugreek (Meethi) seeds'
    },
    {
      imgUrl: 'assets/images/home_page_products/jeera.png', 
      productName: 'Jeera Powder',
      description: 'Freshly grinded pure Jeera'
    },
    {
      imgUrl: 'assets/images/home_page_products/rasam.jpeg', 
      productName: 'Rasam Powder',
      description: 'Red Chilli, Coriander (Dhaniya) seeds, Cumin (Jeera), Fenugreek (Meethi) seeds, Refined Oil, Black Pepper, Mustard, Hing'
    },
    {
      imgUrl: 'assets/images/home_page_products/daniya.png',
      productName: 'Daniya Powder',
      description: 'Sugar, Refined oil, Kova, Maida, Cooking soda'
    },
    {
      imgUrl: 'assets/images/home_page_products/idli_sambar_ina.jpeg',
      productName: 'Idli Sambar',
      description: 'Sugar, Refined oil, Kova, Maida, Cooking soda'
    },
    {
      imgUrl: 'assets/images/home_page_products/bbb.png',
      productName: 'Bisibelebath',
      description: 'Sugar, Refined oil, Kova, Maida, Cooking soda'
    },
    {
      imgUrl: 'assets/images/home_page_products/vangi_bath.jpeg',
      productName: 'Vangibath',
      description: 'Sugar, Refined oil, Kova, Maida, Cooking soda'
    }
  ];
  slideShowInfo1 = 'This is products 1 info';
  slideShow1Header = 'Our Products';

  slideShow2Data: any = [
    {
      imgUrl: 'assets/images/home_page_products_2/cheese_ball.jpg',
      productName: 'Cheese Ball',
      description: 'Cheese ball description'
    },
    {
      imgUrl: 'assets/images/home_page_products_2/grilled_garlic_panner.jpg',
      productName: 'Grilled Garlic Paneer',
      description: 'Grilled Garlic Paneer description'
    },
    {
      imgUrl: 'assets/images/home_page_products_2/bbq_paneer_tikka.jpg',
      productName: 'Barbeque Paneer Tikka',
      description: 'Barbeque Paneer Tikka description'
    },
    {
      imgUrl: 'assets/images/home_page_products_2/peas_cuttlet.jpg',
      productName: 'Peas Cuttlet',
      description: 'Peas Cuttlet description'
    },
    {
      imgUrl: 'assets/images/home_page_products_2/masala_dosa.jpg',
      productName: 'Masala Dosa',
      description: 'Masala Dosa description'
    },
  ]
  slideShowInfo2 = 'This is products 2 info';
  slideShow2Header = 'Our Products 2';


  ngOnInit(): void {
  }

  public setOpacity (opacityValue: string) {
    // console.log('value: ', opacityValue);
    $(".section-content").css("opacity", opacityValue);
    $(".welcome-text").css("opacity", opacityValue);
    $(".btn-order-online-container").css("opacity", opacityValue);
  };

  public scrollToSection (value: string): void {
    var element = document.getElementById(value);
    element?.scrollIntoView ({
      behavior: 'smooth'
    });
  };

  checkIfRightScrolled(index: number, containerClass: string) {
    const slideShowContainer = document.getElementsByClassName(containerClass)[index];
    const singleSlide = document.getElementsByClassName("single-slide")[0];
    const scrollX = slideShowContainer.scrollLeft;
    if (window.innerWidth < 660) {
      if (scrollX > singleSlide.scrollWidth - 20) {
        this.setOpacity('0.0');
      }
    } else {
      if (scrollX > singleSlide.scrollWidth) {
        this.setOpacity('0.0');
      }
    }
  };

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
        const stepper = sectionHeight / 10;
        const screenWidth = window.outerWidth;
        // this.setOpacity('0');
        if (((scrolly % sectionHeight) > stepper)) {
          this.setOpacity('0.9');
        }
        if (((scrolly % sectionHeight) > (stepper * 2))) {
          this.setOpacity('0.7');
        }
        if (((scrolly % sectionHeight) > (stepper * 3))) {
          this.setOpacity('0.5');
        }
        if (((scrolly % sectionHeight) > (stepper * 4))) {
          this.setOpacity('0.3');
        }
        if (((scrolly % sectionHeight) > (stepper * 5))) {
          this.setOpacity('0.0');
        }
        if (((scrolly % sectionHeight) > (stepper * 6))) {
          this.setOpacity('0.0');
        }
        if (((scrolly % sectionHeight) > (stepper * 7))) {
          this.setOpacity('0.5');
        }
        if (((scrolly % sectionHeight) > (stepper * 8))) {
          this.setOpacity('0.7');
        }
        if (((scrolly % sectionHeight) > (stepper * 9))) {
          this.setOpacity('0.9');
        }
        if (((scrolly % sectionHeight) > (stepper * 9.5))) {
          this.setOpacity('1');
        }

        // console.log('scrollY ', scrolly); //1175
        // console.log('sectionHeight: ', sectionHeight); //1447
        if (screenWidth < 600) {
          var mobileDividerOffset = 3.5;
          if (scrolly < (sectionHeight - (sectionHeight/mobileDividerOffset))) {
            // console.log('in section 1');
            this.activeSection = 1;
            this.header = 'Curating tastes for life!';
          }
          if ((scrolly < (sectionHeight * 2) - (sectionHeight/mobileDividerOffset)) && (scrolly > sectionHeight - (sectionHeight/mobileDividerOffset))) {
            this.activeSection = 2;
            this.header = 'Curating Tradition';
            this.description = '';
            this.checkIfRightScrolled(0, 'slide-show-container');
          }
          
          if ((scrolly < (sectionHeight * 3) - (sectionHeight/mobileDividerOffset)) && (scrolly > (sectionHeight * 2) - (sectionHeight/mobileDividerOffset))) {
            this.activeSection = 3;
            this.header = 'Curating Happiness';
            this.description = '';
            this.checkIfRightScrolled(1, 'slide-show-container');
          }
          if ((scrolly < (sectionHeight * 4) - (sectionHeight/mobileDividerOffset)) && (scrolly > (sectionHeight * 3) - (sectionHeight/mobileDividerOffset))) {
            this.header = 'The Journey...';
            this.activeSection = 4;
            this.description = '';
            this.checkIfRightScrolled(0, 'about-us-mobile-container');
          }
          if ((scrolly < (sectionHeight * 5) - (sectionHeight/mobileDividerOffset)) && (scrolly > (sectionHeight * 4) - (sectionHeight/mobileDividerOffset))) {
            this.activeSection = 5;
            // this.header = 'Billion Mouths Million Opportunities';
            this.header = 'Curating Opportunities';
            // this.description = 'Franchise with us!';
          }
          if ((scrolly < (sectionHeight * 6) - (sectionHeight/mobileDividerOffset)) && (scrolly > (sectionHeight * 5) - (sectionHeight/mobileDividerOffset))) {
            this.activeSection = 6;
          }
        } else if (screenWidth > 600) {
          var dividerOffset = 2.2;
          if (scrolly < (sectionHeight - (sectionHeight/dividerOffset))) {
            this.activeSection = 1;
            this.header = 'Curating tastes for life!';
          }
          if ((scrolly < (sectionHeight * 2) - (sectionHeight/dividerOffset)) && (scrolly > sectionHeight - (sectionHeight/dividerOffset))) {
            this.activeSection = 2;
            this.header = 'Curating Tradition';
            this.description = '';
            this.checkIfRightScrolled(0, 'slide-show-container');
          }
          if ((scrolly < (sectionHeight * 3) - (sectionHeight/dividerOffset)) && (scrolly > (sectionHeight * 2) - (sectionHeight/dividerOffset))) {
            this.activeSection = 3;
            this.header = 'Curating Happiness';
            this.description = '';
            this.checkIfRightScrolled(1, 'slide-show-container');
          }
          if ((scrolly < (sectionHeight * 4) - (sectionHeight/dividerOffset)) && (scrolly > (sectionHeight * 3) - (sectionHeight/dividerOffset))) {
            this.header = 'The Journey...';
            this.activeSection = 4;
            this.description = '';
            this.checkIfRightScrolled(0, 'about-us-mobile-container');
          }
          if ((scrolly < (sectionHeight * 5) - (sectionHeight/dividerOffset)) && (scrolly > (sectionHeight * 4) - (sectionHeight/dividerOffset))) {
            this.activeSection = 5;
            // this.header = 'Billion Mouths Million Opportunities';
            this.header = 'Curating Opportunities';
            // this.description = 'Franchise with us!';
          }
          if ((scrolly < (sectionHeight * 6) - (sectionHeight/dividerOffset)) && (scrolly > (sectionHeight * 5) - (sectionHeight/dividerOffset))) {
            this.activeSection = 6;
          }
          if ((scrolly < (sectionHeight * 7)) && (scrolly > (sectionHeight * 6))) {
            this.activeSection = 7;
          }
        }
        
      });
      
    })()
  };

}
