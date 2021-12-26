import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  outletData: any[] = [
    {
      outletIndex: '1',
      outletName: 'RBI LAYOUT',
      outletDescription: '',
      outletAddress: 'JP Nagar 7th Phase, Opp. Big Bazar, Kothnur Main Road',
      outletPhone: '94483 95832',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
    {
      outletIndex: '2',
      outletName: 'RBI LAYOUT',
      outletDescription: 'FINE DINING RESTAURANT',
      outletAddress: 'JP Nagar and Konankunte Cross',
      outletPhone: '+91 9071425110',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
    {
      outletIndex: '3',
      outletName: 'KONANKUNTE',
      outletDescription: '',
      outletAddress: 'Konankunte Cross, Amrutha Nagar Road, Kanakpura Road',
      outletPhone: '+91 9448281193',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
    {
      outletIndex: '4',
      outletName: '24th MAIN, JP NAGAR',
      outletDescription: '',
      outletAddress: '#75/A, 24th Main Road, JP Nagar 7th Phase',
      outletPhone: '+91 9071425012',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
    // {
    //   outletIndex: '5',
    //   outletName: 'KORAMANGALA',
    //   outletDescription: '',
    //   outletAddress: '#466, Ground Floor Shop, 17th G Main, 6th Block, 80ft Road, Opp.BMTC Bus Depo',
    //   outletPhone: '+91 9071481007',
    //   outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    // },
    {
      outletIndex: '6',
      outletName: 'AKSHAYNAGAR',
      outletDescription: '',
      outletAddress: '#67, Begur hulimavu main road Bhagyalakshmi Avenue, Rukmaiah Layout, Nyanappana Halli',
      outletPhone: '+91 8197935112',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
    {
      outletIndex: '7',
      outletName: 'KENGERI',
      outletDescription: '',
      outletAddress: '25, 2nd Main Rd, Stage I, Kengeri Satellite Town, Bengaluru, Karnataka 560060',
      outletPhone: '+91 9986242652',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
    {
      outletIndex: '8',
      outletName: 'UTTARAHALLI',
      outletDescription: '',
      outletAddress: 'No #64 Krishnappa Layout, Uttarahalli Main Rd, Beside Poornaprgnya Layout Bustop',
      outletPhone: '+91 9****',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
    {
      outletIndex: '9',
      outletName: 'RT NAGAR',
      outletDescription: '',
      outletAddress: 'Shop No.57, 1, 5th Main Rd, Papanna Block, AK Colony, Ganganagar',
      outletPhone: '+91 9****',
      outletImage: 'assets/images/outlet_images/sample_outlet_photo.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
