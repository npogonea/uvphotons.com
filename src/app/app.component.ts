import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uvphotonscom';

  constructor(private translate: TranslateService,
    private router:Router) {
    // translate.setDefaultLang('en');
    // translate.use('en');
    translate.addLangs(['en', 'de', 'si']);
    translate.setDefaultLang('en');


    const browserLang: string = translate.getBrowserLang()!;
    console.log(browserLang)
    this.checkLangBrowser(browserLang);

    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

  }

  
  checkLangBrowser(lang: string) {
    if (lang == "en") this.translate.use('en')
    else if (lang == "de") this.translate.use('de')
    else if (lang == "sl") this.translate.use('si')
  }


  switchLanguage(language: string) {
      this.translate.use(language);
  }
}
