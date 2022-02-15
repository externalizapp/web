import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'externalizapp';  

    constructor(private translate: TranslateService) {
      const browserLanguage: string = navigator.language.slice(0, 2);
      translate.setDefaultLang(Config.DEFAULT_LANGUAGE);
      if (browserLanguage in Config.ALLOWED_LANGUAGES){
        translate.use(browserLanguage);
      }else{
        translate.use(Config.DEFAULT_LANGUAGE);
      }
  }
}
