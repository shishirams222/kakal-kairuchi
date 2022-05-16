import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

// custom components
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';

// primeng components
import { ImageModule } from 'primeng/image';
import { FooterComponent } from './footer/footer.component';
import { FranchiseEnquiryComponent } from './franchise-enquiry/franchise-enquiry.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { LocationsComponent } from './locations/locations.component';
import { OutletDetailsComponent } from './outlet-details/outlet-details.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SlideShowComponent } from './slide-show/slide-show.component';
import { AboutUsMobileComponent } from './about-us-mobile/about-us-mobile.component';
import { OpportunitiesEnquiryComponent } from './opportunities-enquiry/opportunities-enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FooterComponent,
    FranchiseEnquiryComponent,
    AboutUsComponent,
    MenuComponent,
    LocationsComponent,
    OutletDetailsComponent,
    SideNavComponent,
    SlideShowComponent,
    AboutUsMobileComponent,
    OpportunitiesEnquiryComponent,
    // HttpClient
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RoutingModule,
    ImageModule,
    SidebarModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
