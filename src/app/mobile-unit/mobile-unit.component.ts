import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service'
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';

// import 'hammerjs';

import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-mobile-unit',
  templateUrl: './mobile-unit.component.html',
  styleUrls: ['./mobile-unit.component.css']
})
export class MobileUnitComponent implements OnInit {
  display = 'none';
  title = 'UV-C Light Disinfection | The VX-One S a unique and powerful UV-C mobile disinfection solution.'


  // thumbnails: boolean = false
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private modalService: ModalService,
    private metaTagService: Meta,
    private titleService: Title,
    private gtmService: GoogleTagManagerService,
    private router: Router) { }


  orderEvent() {

    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'orderform1',
      data: 'vxones-order-click',
    };
    this.gtmService.pushTag(gtmTag);
  }

  ngOnInit() {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: 'keywords', content: 'UVC disinfection robot, UV-C mobile unit, powerfull UVC, germadical UVC robot,' },
      { name: 'description', content: 'Poweful, smart and universal UVC disinfection robot' },
    ]);

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

    this.galleryOptions = [
      {
        thumbnails: false
      },
      { breakpoint: 24,
        width: '24px',
        height: '24px'
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery-icon.jpg',
        medium: 'assets/images/gallery-icon.jpg',
        big: 'assets/images/vxones-2.jpg'
      },
      {
        small: 'assets/images/gallery-icon.jpg',
        medium: 'assets/images/gallery-icon.jpg',
        big: 'assets/images/vxones-1.jpg'
      },
      {
        small: 'assets/images/gallery-icon.jpg',
        medium: 'assets/images/gallery-icon.jpg',
        big: 'assets/images/vxones-3.jpg'
      },
      {
        small: 'assets/images/gallery-icon.jpg',
        medium: 'assets/images/gallery-icon.jpg',
        big: 'assets/images/vxones-4.jpg'
      },
      {
        small: 'assets/images/gallery-icon.jpg',
        medium: 'assets/images/gallery-icon.jpg',
        big: 'assets/images/vxones-5.jpg'
      },

    ];

  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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
