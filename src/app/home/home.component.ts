import { Element } from '@angular/compiler';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  imgIndex: number = 0;
  header: string = 'Hola';
  description: string = 'Welcome to KKR';
  showNav: boolean = false;
  showLeft: boolean = false;
  showRight: boolean = true;
  showHeaderButtons: boolean = true;
  showHeader: boolean = true;
  ngOnInit(): void {
  }

  scrollNext () {
    const slideShowContainer = document.getElementById("slide-show-container");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container").scrollLeft(scrollValue + 300);
    this.imgIndex++;
  };

  scrollPrevious () {
    const slideShowContainer = document.getElementById("slide-show-container");
    const scrollValue = slideShowContainer?.scrollLeft || 0;
    $(".slide-show-container").scrollLeft(scrollValue-300);
    this.imgIndex--;
  };

  ngAfterContentInit() {
    (() => {

      const app = document.getElementById("main");
      const section1 = document.getElementById("section-one");
      app && app.addEventListener('scroll', () => {
        const scrolly = app.scrollTop;
        const sectionHeight = section1 && section1.scrollHeight || 0;
        const stepper = sectionHeight/10;
        if (scrolly > (sectionHeight - 1)) {
          this.showNav = true;
        } else {
          this.showNav = false;
        }
        if (scrolly > stepper) {
          $(".welcome-text").css("opacity", "0.9");
          $(".btn-order-online-container").css("opacity", "0.9");
        }
        if (scrolly > (stepper * 2)) {
          $(".welcome-text").css("opacity", "0.7");
          $(".btn-order-online-container").css("opacity", "0.7");
        }
        if (scrolly > (stepper * 3)) {
          $(".welcome-text").css("opacity", "0.5");
          $(".btn-order-online-container").css("opacity", "0.5");
        }
        if (scrolly > (stepper * 4)) {
          $(".welcome-text").css("opacity", "0.3");
          $(".btn-order-online-container").css("opacity", "0.3");
        }
        if (scrolly > (stepper * 5)) {
          $(".welcome-text").css("opacity", "0.1");
          $(".btn-order-online-container").css("opacity", "0.1");
          $(".header").css("color", "floralwhite");
          $(".description").css("color", "orange");
          this.showHeader = true;
          this.header = 'Our Products';
          this.description = 'Gulaab Jamoon';
        } else if (scrolly < (stepper * 5)) {
          this.showHeader = true;
          this.header = 'Hola!';
          this.description = 'Welcome to KKR';
          $(".header").css("color", "darkblue");
          $(".description").css("color", "black");
        }
        if (scrolly > ((stepper * 5) + sectionHeight)) {
          this.header = 'Our Products 2';
          this.description = 'Cheese ball';
        }
        if (scrolly > (stepper * 6)) {
          $(".welcome-text").css("opacity", "0.3");
          $(".btn-order-online-container").css("opacity", "0.3");
        }
        if (scrolly > (stepper * 7)) {
          $(".welcome-text").css("opacity", "0.5");
          $(".btn-order-online-container").css("opacity", "0.5");
        }
        if (scrolly > (stepper * 8)) {
          $(".welcome-text").css("opacity", "0.7");
          $(".btn-order-online-container").css("opacity", "0.7");
        }
        if (scrolly > (stepper * 9)) {
          $(".welcome-text").css("opacity", "0.9");
          $(".btn-order-online-container").css("opacity", "0.9");
        }
        if (scrolly >= (stepper * 10)) {
          $(".welcome-text").css("opacity", "1.0");
          $(".btn-order-online-container").css("opacity", "1.0");
        }

        if (scrolly >= ((sectionHeight * 3) - 140)) {
          this.showHeaderButtons = false;
          this.showNav = false;
        }
        if (scrolly < ((sectionHeight * 3) - 140)) {
          this.showHeaderButtons = true;
          this.showNav = true;
        }
      });

      const slideShowContainer = document.getElementById("slide-show-container1");
      const image1 = document.getElementById("image-one");
      slideShowContainer && slideShowContainer.addEventListener('scroll', () => {
        const scrollX = slideShowContainer.scrollLeft;
        const imageWidth = image1?.scrollWidth || 0;

        if ((scrollX === 0)) {
          this.description = 'Gulaab Jamoon';
          this.showLeft = false;
          this.showRight = true;
          this.showHeader = true;
        }

        if ((scrollX > 0) && (scrollX <= imageWidth)) {
          this.description = 'Chakli';
          this.showLeft = false;
          this.showRight = true;
          this.showHeader = false;
        }

        if (scrollX > (imageWidth) && scrollX <= (imageWidth*2)) {
          this.description = 'Jeera powder';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*2) && scrollX >= (imageWidth*3)) {
          this.description = 'Rasam powder';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*3) && scrollX >= (imageWidth*4)) {
          this.description = 'Dhaniya Powder';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*4) && scrollX >= (imageWidth*5)) {
          this.description = 'Sambar powder for Idli';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*5) && scrollX >= (imageWidth*6)) {
          this.description = 'Bisibelebath powder';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*6) && scrollX >= (imageWidth*7)) {
          this.description = 'Vangibath Powder';
          this.showLeft = true;
          this.showRight = false;
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
        }

        if ((scrollX > 0) && (scrollX <= imageWidth)) {
          this.description = 'Grilled garlic Paneer';
          this.showLeft = false;
          this.showRight = true;
          this.showHeader = false;
        }

        if (scrollX > (imageWidth) && scrollX <= (imageWidth*2)) {
          this.description = 'BBQ Paneer';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*2) && scrollX >= (imageWidth*3)) {
          this.description = 'Peas cutlet';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*3) && scrollX >= (imageWidth*4)) {
          this.description = 'Masala Dosa';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*4) && scrollX >= (imageWidth*5)) {
          this.description = 'Sambar powder for Idli';
          this.showLeft = true;
          this.showRight = true;
        }
        if (scrollX > (imageWidth*5) && scrollX >= (imageWidth*6)) {
          this.description = 'Bisibelebath powder';
          this.showLeft = true;
          this.showRight = true;
        }
      });
    })()
  };

}
