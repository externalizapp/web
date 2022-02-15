import { Component, OnInit } from '@angular/core';
import { faCode, faInfo, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Element{
  label: string,
  icon: IconDefinition
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  dockItems: Array<Element> = [];

  ngOnInit(): void {
      this.dockItems = [
        {
            label: 'sidebar.find',
            icon: faSearch
        },
        {
            label: 'sidebar.api',
            icon: faCode
        },
        {
            label: 'sidebar.about',
            icon: faInfo
        }
    ];
  }

  doClick(label: string): string {
    let returnPath: string = '/';
    switch (label){
      case 'sidebar.api':
        returnPath = '/api'
        break;
      case 'sidebar.about':
        returnPath = '/about'
        break;
    }
    return returnPath;
  }  

}
