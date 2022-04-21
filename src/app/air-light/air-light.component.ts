import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ModalService } from '../modal/modal.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-air-light',
  templateUrl: './air-light.component.html',
  styleUrls: ['./air-light.component.css']
})
export class AirLightComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  
  constructor(private modalService: ModalService,
    private gtmService: GoogleTagManagerService,
    private router: Router,
    private translate: TranslateService
    ) { 
      // translate.addLangs(['en', 'de', 'it']);
    // translate.setDefaultLang('si');
  }

  ngOnInit(): void {
    this.galleryOptions =[
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 3,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: 'assets/images/airlight.png',
        medium: 'assets/images/airlight.png',
        big: 'assets/images/airlight.png'
      },
      {
        small: 'assets/images/airlight1.png',
        medium: 'assets/images/airlight1.png',
        big: 'assets/images/airlight1.png'
      },
      {
        small: 'assets/images/airlight2.png',
        medium: 'assets/images/airlight2.png',
        big: 'assets/images/airlight2.png'
      },
      // {
      //   small: 'assets/images/vxoneair7.jpg',
      //   medium: 'assets/images/vxoneair7.jpg',
      //   big: 'assets/images/vxoneair7.jpg'
      // },
      // {
      //   small: 'assets/images/vxoneair4.jpg',
      //   medium: 'assets/images/vxoneair4.jpg',
      //   big: 'assets/images/vxoneair4.jpg'
      // },
      // {
      //   small: 'assets/images/vxoneair5.jpg',
      //   medium: 'assets/images/vxoneair5.jpg',
      //   big: 'assets/images/vxoneair5.jpg'
      // },
      // {
      //   small: 'assets/images/vxoneair6.jpg',
      //   medium: 'assets/images/vxoneair6.jpg',
      //   big: 'assets/images/vxoneair6.jpg'
      // },
      // {
      //   small: 'assets/images/vxoneair8.jpg',
      //   medium: 'assets/images/vxoneair8.jpg',
      //   big: 'assets/images/vxoneair8.jpg'
      // },
      // {
      //   small: 'assets/images/vxoneair9.jpg',
      //   medium: 'assets/images/vxoneair9.jpg',
      //   big: 'assets/images/vxoneair9.jpg'
      // },

    ];
  }

  

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  orderEvent() {

    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'orderform1',
      data: 'vxones-order-click',
    };
    this.gtmService.pushTag(gtmTag);
  }

  openDialogA() {
    const el = document.getElementById('a');
    if (el!.style.display == 'block' )
     {
      el!.style.display = 'none';
     } else {
      el!.style.display = 'block';
     }
  }

  openDialogB() {
    const el = document.getElementById('b');
    if (el!.style.display == 'block' )
     {
      el!.style.display = 'none';
     } else {
      el!.style.display = 'block';
     }
  }
  openDialogC() {
    const el = document.getElementById('c');
    if (el!.style.display == 'block' )
     {
      el!.style.display = 'none';
     } else {
      el!.style.display = 'block';
     }
  }

}
