import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franchise-enquiry',
  templateUrl: './franchise-enquiry.component.html',
  styleUrls: ['./franchise-enquiry.component.scss']
})
export class FranchiseEnquiryComponent implements OnInit {

  constructor() { }

  submitEnquiry () {
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
    alert ("Form submitted successfully");
  };

  ngOnInit(): void {
  }

}
