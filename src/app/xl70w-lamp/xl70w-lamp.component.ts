import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service'
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-xl70w-lamp',
  templateUrl: './xl70w-lamp.component.html',
  styleUrls: ['./xl70w-lamp.component.css']
})
export class Xl70wLampComponent implements OnInit {

  title = 'UV-C Light Disinfection | Very powerful UV-C radiation inside a compact body.'

  constructor(private modalService: ModalService,
    private gtmService: GoogleTagManagerService,
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
