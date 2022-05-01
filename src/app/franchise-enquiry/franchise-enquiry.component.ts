import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-franchise-enquiry',
  templateUrl: './franchise-enquiry.component.html',
  styleUrls: ['./franchise-enquiry.component.scss']
})
export class FranchiseEnquiryComponent implements OnInit {

  constructor() { }

  firstName: string = '';
  isWidgetOpen: boolean = false;
  isFormOpen: boolean = true;

  openWidget() {
    this.isWidgetOpen = true;
  };

  resetWidget() {
    this.isWidgetOpen = false;
    this.isFormOpen = true;
  };

  submitEnquiry (formValue: any) {
    this.isFormOpen = false;
    // const formData = $("#myForm").serializeArray();
    // console.log('formData: ', formData);
    // $.ajax({
    //     url:'https://api.apispreadsheets.com/data/410/',
    //     type:'post',
    //     data:formData,
    //     success: function(){
    //       alert("Form Data Submitted :)")
    //     },
    //     error: function(){
    //       alert("There was an error :(")
    //     }
    // });
    console.log(formValue);
    let myForm = document.querySelector("userForm");
    console.log('form: ', myForm);
    // let formData = new FormData(formValue.form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  ngOnInit(): void {
  }

}
