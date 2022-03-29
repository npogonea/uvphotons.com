import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service'
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-vxone-air',
  templateUrl: './vxone-air.component.html',
  styleUrls: ['./vxone-air.component.css']
})
export class VxoneAirComponent implements OnInit {

  display = 'none';
  title = 'UV-C Light Disinfection | Biodefense Indoor Air Protection System. 3 Level UV-C powered protection against Covid-19 and other viruses.'

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  showMore1 = false;
  showMore2 = false;

  constructor(private modalService: ModalService,
    private metaTagService: Meta,
    private titleService: Title,
    private gtmService: GoogleTagManagerService,
    private router: Router) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: 'keywords', content: 'UVC air disinfection robot, UV-C air mobile unit, powerfull UVC,' },
      { name: 'description', content: 'Biodefense Indoor Air Protection System. 3 Level UV-C powered protection against Covid-19 and other viruses.' },
      { name: 'image', content: 'https://uvphotons.com/assets/images/uvphotons_vxone_air.jpg'}
    ]);

    this.galleryOptions =
    // [
    //   {
    //     thumbnails: false
    //   },
    //   { breakpoint: 24,
    //     width: '24px',
    //     height: '24px'
    //   }
    // ];
    // [
    //   { "imagePercent": 100, "thumbnailsPercent": 20, "thumbnailsColumns": 6, "thumbnailsMargin": 0, "thumbnailMargin": 0 },
    //   { "breakpoint": 500, "width": "300px", "height": "400px", "thumbnailsColumns": 3 },
    //   { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
    //   ]
    // [
    //   { "previewFullscreen": true, "previewKeyboardNavigation": true },
    //   { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
    //   { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
    //   ]
    [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 0,
        thumbnailMargin: 0
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/vxoneair1.jpg',
        medium: 'assets/images/vxoneair1.jpg',
        big: 'assets/images/vxoneair1.jpg'
      },
      {
        small: 'assets/images/vxoneair2.jpg',
        medium: 'assets/images/vxoneair2.jpg',
        big: 'assets/images/vxoneair2.jpg'
      },
      {
        small: 'assets/images/vxoneair3.jpg',
        medium: 'assets/images/vxoneair3.jpg',
        big: 'assets/images/vxoneair3.jpg'
      },
      {
        small: 'assets/images/vxoneair7.jpg',
        medium: 'assets/images/vxoneair7.jpg',
        big: 'assets/images/vxoneair7.jpg'
      },
      {
        small: 'assets/images/vxoneair4.jpg',
        medium: 'assets/images/vxoneair4.jpg',
        big: 'assets/images/vxoneair4.jpg'
      },
      {
        small: 'assets/images/vxoneair5.jpg',
        medium: 'assets/images/vxoneair5.jpg',
        big: 'assets/images/vxoneair5.jpg'
      },
      {
        small: 'assets/images/vxoneair6.jpg',
        medium: 'assets/images/vxoneair6.jpg',
        big: 'assets/images/vxoneair6.jpg'
      },
      {
        small: 'assets/images/vxoneair8.jpg',
        medium: 'assets/images/vxoneair8.jpg',
        big: 'assets/images/vxoneair8.jpg'
      },
      {
        small: 'assets/images/vxoneair9.jpg',
        medium: 'assets/images/vxoneair9.jpg',
        big: 'assets/images/vxoneair9.jpg'
      },

    ];

  }


  orderEvent() {

    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'orderform1',
      data: 'vxones-order-click',
    };
    this.gtmService.pushTag(gtmTag);
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
