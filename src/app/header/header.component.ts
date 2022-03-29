import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display = 'none';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('si');
  }

  useLanguage(language: string) {
  this.translate.use(language);
  }

  ngOnInit(): void {
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
