import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { CommonModule } from "@angular/common";

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
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RoutingModule,
    ImageModule,
    SidebarModule,
    ButtonModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
