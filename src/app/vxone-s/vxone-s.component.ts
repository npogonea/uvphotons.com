import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service'
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-vxone-s',
  templateUrl: './vxone-s.component.html',
  styleUrls: ['./vxone-s.component.css']
})
export class VxoneSComponent implements OnInit {

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

    this.galleryOptions =[
    {
      width: '600px',
      height: '400px',
      thumbnailsColumns: 4,
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
        small: 'assets/images/vxone-1.jpg',
        medium: 'assets/images/vxone-1.jpg',
        big: 'assets/images/vxone-1.jpg'
      },
      {
        small: 'assets/images/vxone-2.jpg',
        medium: 'assets/images/vxone-2.jpg',
        big: 'assets/images/vxone-2.jpg'
      },
      {
        small: 'assets/images/vxone-3.jpg',
        medium: 'assets/images/vxone-3.jpg',
        big: 'assets/images/vxone-3.jpg'
      },
      {
        small: 'assets/images/vxone-4.jpg',
        medium: 'assets/images/vxone-4.jpg',
        big: 'assets/images/vxone-4.jpg'
      },
      {
        small: 'assets/images/vxone-5.jpg',
        medium: 'assets/images/vxone-5.jpg',
        big: 'assets/images/vxone-5.jpg'
      },
      {
        small: 'assets/images/vxone-6.jpg',
        medium: 'assets/images/vxone-6.jpg',
        big: 'assets/images/vxone-6.jpg'
      },
      {
        small: 'assets/images/vxone-7.jpg',
        medium: 'assets/images/vxone-7.jpg',
        big: 'assets/images/vxone-7.jpg'
      },
      {
        small: 'assets/images/vxone-8.jpg',
        medium: 'assets/images/vxone-8.jpg',
        big: 'assets/images/vxone-8.jpg'
      },
      {
        small: 'assets/images/vxone-9.jpg',
        medium: 'assets/images/vxone-9.jpg',
        big: 'assets/images/vxone-9.jpg'
      },
      {
        small: 'assets/images/vxone-10.jpg',
        medium: 'assets/images/vxone-10.jpg',
        big: 'assets/images/vxone-10.jpg'
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
