import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';


interface Language {
  name: string,
  code: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  public languageList: Array<Language> = [];
  public selectedLanguage: Language | undefined = undefined;
  faLanguage = faLanguage;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.languageList.push({name: 'Català', code: 'ca'});
    this.languageList.push({name: 'English', code: 'en'});
    this.languageList.push({name: 'Español', code: 'es'});     
    this.translate.onLangChange.subscribe((event) => {
    this.selectedLanguage = this.languageList.find((x: Language) => 
         {
           return x.code == event.lang
          });
    });
  }

  private useLanguage(language: string): void {
    this.translate.use(language);
  }

  doChangeLanguage(): void{
    if(this.selectedLanguage){
      this.useLanguage(this.selectedLanguage.code);
    }
  }



}
