import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title = 'UV-C Light Disinfection | UV Germicidal Smart Robot To Kill Germs - UV Photons'
  public href: string = "";

  constructor(private titleService: Title, 
    private activatedRoute: ActivatedRoute, 
    private router:Router, 
    private translate: TranslateService) { 
  }

  ngOnInit(): void {
    // this.titleService.setTitle(this.title);
    this.href = this.router.url;
    this.checkLangBrowser(this.href)

    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   console.log(params);
    // });

  }

    
  checkLangBrowser(lang: string) {
    console.log(lang)
    if (lang == "/en") this.translate.use('en')
    else if (lang == "/de") this.translate.use('de')
    else if (lang == "/sl") this.translate.use('si')
    else if (lang == "/si") this.translate.use('si')
  }

}
