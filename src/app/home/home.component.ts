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
  header: string = 'Enriching Delicious Memories!';
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


  ngOnInit(): void {
  }

  setOpacity (opacityValue: string) {
    $(".section-content").css("opacity", opacityValue);
    $(".welcome-text").css("opacity", opacityValue);
    $(".btn-order-online-container").css("opacity", opacityValue);
  };

  public deletePhone (value: string): void {
    var element = document.getElementById(value);
    element?.scrollIntoView ({
      behavior: 'smooth'
    });
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
        // if (((scrolly % sectionHeight) > (stepper * 6))) {
        //   this.setOpacity('0.3');
        // }
        // if (((scrolly % sectionHeight) > (stepper * 7))) {
        //   this.setOpacity('0.5');
        // }
        // if (((scrolly % sectionHeight) > (stepper * 8))) {
        //   this.setOpacity('0.7');
        // }
        if (((scrolly % sectionHeight) > (stepper * 9))) {
          this.setOpacity('0.9');
        }
        if (((scrolly % sectionHeight) > (stepper * 10))) {
          this.setOpacity('1');
        }

        if (scrolly < (sectionHeight - 100)) {
          this.activeSection = 1;
          this.header = 'Enriching Delicious Memories';
        }
        if ((scrolly < (sectionHeight * 2) - 100) && (scrolly > sectionHeight - 100)) {
          this.activeSection = 2;
          this.header = 'Our Products 1';
          this.description = 'Single line about our products';
        }
        if ((scrolly < (sectionHeight * 3) - 100) && (scrolly > (sectionHeight * 2) - 100)) {
          this.activeSection = 3;
          this.header = 'Our Products 2';
          this.description = 'Single line about our products 2';
        }
        if ((scrolly < (sectionHeight * 4) - 100) && (scrolly > (sectionHeight * 3) - 100)) {
          this.activeSection = 4;
        }
        if ((scrolly < (sectionHeight * 5) - 100) && (scrolly > (sectionHeight * 4) - 100)) {
          this.activeSection = 5;
        }
        if ((scrolly < (sectionHeight * 6)) && (scrolly > (sectionHeight * 5))) {
          this.activeSection = 6;
        }
        if ((scrolly < (sectionHeight * 7)) && (scrolly > (sectionHeight * 6))) {
          this.activeSection = 7;
        }
      });
      
    })()
  };

}
