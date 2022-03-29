import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { environment } from '../../environments/environment'
import { ModalService } from '../modal.service';

import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-ordermodal',
  templateUrl: './ordermodal.component.html',
  styleUrls: ['./ordermodal.component.css']
})
export class OrdermodalComponent implements OnInit {

  constructor(private http: HttpClient,
    private modalService: ModalService,
    private gtmService: GoogleTagManagerService,
    private router: Router,
    ) { }

  name!: string;
  email!: string;
  phone!: string;
  msg!: string;
  apikey: string = "e9d79ab8-5fd1-4fc7-9767-4e53ee1c93cd";

  isValidError!:  boolean;
  validError!: string;
  submited!: boolean;
  

  orderEvent() {

    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'orderform1',
      data: 'vxones-order-click',
    };
    this.gtmService.pushTag(gtmTag);
  }

  ngOnInit(): void {
    // push GTM data layer for every visited page
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }


  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



  validatePhone(phone: string) {
    if (this.phone == undefined || this.phone == "") {
      return true
    } else {
      const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
      return re.test(phone);
    }
  }

  checkData() {

    if (this.name == undefined) {
      this.isValidError = true;
      this.validError = "Please enter your full name."
      return false;
    } else if (this.name == "" || this.name.length < 3) {
      this.isValidError = true;
      this.validError = "Please enter your full name."
      return false;
    } else if (!this.validateEmail(this.email)) {
      this.isValidError = true;
      this.validError = "Please enter a valid email address."
      return false;
    } else if (!this.validatePhone(this.phone)) {
      this.isValidError = true;
      this.validError = "Please enter a valid phone number."
      return false;
    }
    else {
      this.isValidError = false
      this.validError = ""
      return true;
    }
  }

  clearForm() {
    this.name = ""
    this.email = ""
    this.phone = ""
    this.msg = ""
  }

  resubmitForm () {
    this.submited = false;
  }


  submitContactForm() {
    if (this.checkData()) {

      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        description: this.msg,
        apikey: this.apikey
      }
      // console.log(formData);
      this.submited = true;
      // this.closeModal();
      // this.clearForm();
      // this.setDelay();
      return this.http
        .post<any>(
          'https://justaform.com/form',
          formData,
          {
            observe: 'response'
          }
        )
        .subscribe(responseData => {
          this.orderEvent();
          this.setDelay();
          return responseData;
        })
    } else return
  }

closeModal() {
    this.modalService.close('order-modal');
    this.clearForm();
  }

setDelay() {
  setTimeout(()=> {
    this.closeModal()
  }, 2000);
}

}
