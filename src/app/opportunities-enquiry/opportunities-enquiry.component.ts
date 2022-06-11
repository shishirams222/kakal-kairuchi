import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-opportunities-enquiry',
  templateUrl: './opportunities-enquiry.component.html',
  styleUrls: ['./opportunities-enquiry.component.scss']
})
export class OpportunitiesEnquiryComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  @Input() activeSection = 0;

  firstName: string = '';
  isWidgetOpen: boolean = false;
  isFormOpen: boolean = true;
  showToast: boolean = false;


  openForm() {
    this.isWidgetOpen = true;
  };

  resetForm() {
    this.isWidgetOpen = false;
    this.isFormOpen = true;
  };

  showToastMessage() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
      this.resetForm();
    }, 3000);
  };

  onSubmit (formValue: any) {
    this.isFormOpen = false;

    var formDataString = 'Franchise Enquiry: First Name:' + formValue.firstName + ' , Last Name:' + formValue.lastName + ', Phone: ' + formValue.phone + ', Email: ' + formValue.email + ', Inquiry Details: ' + formValue.description;
    var request = new XMLHttpRequest();

    request.open(
      "POST",
      'https://api.rock.so/webhook/bot?method=sendMessage&auth=aFvy5SnlY6sEiX3MbowzGUSVnB8JAVjFG5ZT8csnBVE');

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      "text": formDataString
    }

    request.send(JSON.stringify(params));
    this.showToastMessage();
  };

  ngOnInit(): void {
  }

}
