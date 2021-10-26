import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FranchiseEnquiryComponent } from '../franchise-enquiry/franchise-enquiry.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { MenuComponent } from '../menu/menu.component';
import { LocationsComponent } from '../locations/locations.component';

const routes = [
  {path: 'home', component: HomeComponent},
  // auto redirect to home
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'franchise', component: FranchiseEnquiryComponent},
  {path: 'about_us', component: AboutUsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'about_us', component: AboutUsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
