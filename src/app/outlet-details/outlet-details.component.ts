import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outlet-details',
  templateUrl: './outlet-details.component.html',
  styleUrls: ['./outlet-details.component.scss']
})
export class OutletDetailsComponent implements OnInit {

  @Input() outletImage = '';
  @Input() outletName = '';
  @Input() outletAddress = '';
  @Input() outletPhone = '';
  @Input() onlineOrderLink = '';
  @Input() outletIndex = '';
  @Input() outletDescription = '';

  constructor() { }

  ngOnInit(): void {
    // this.outletImage = 'assets/images/outlet_images' + this.outletImage;
    // console.log('outletImage = ', this.outletImage);
  }

}
