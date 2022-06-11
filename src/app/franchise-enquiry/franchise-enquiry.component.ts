import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-franchise-enquiry',
  templateUrl: './franchise-enquiry.component.html',
  styleUrls: ['./franchise-enquiry.component.scss']
})
export class FranchiseEnquiryComponent implements OnInit {

  constructor ( private http: HttpClient ) {
  }

  firstName: string = '';
  isWidgetOpen: boolean = false;
  isFormOpen: boolean = true;
  showToast: boolean = false;

  openWidget() {
    this.isWidgetOpen = true;
  };

  resetWidget() {
    this.isWidgetOpen = false;
    this.isFormOpen = true;
  };

  showToastMessage() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
      this.resetWidget();
    }, 3000);
  };

  onSubmit (formValue: any) {
    this.isFormOpen = false;

    var formDataString = 'Feedback: Name:' + formValue.name + ', Phone: ' + formValue.phone + ', Email: ' + formValue.email + ', Feedback: ' + formValue.description;
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
