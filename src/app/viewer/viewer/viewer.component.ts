import { Component, Input, OnInit, OnDestroy } from '@angular/core';


import { faExternalLinkAlt, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import {Location} from '@angular/common';
import { Adjudicacion } from '../../models/adjudicacion.model';
import { NavigationService } from '../../services/navigation.service';
import { Contrato } from '../../models/contrato.model';


interface DataRow{
  field: string,
  value: string | number
  isExternalLink: boolean
}

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, OnDestroy {
  @Input() contract: Contrato | undefined;
  contractData: Array<DataRow> = [];
  adjudicationsData: Array<DataRow> = [];
  adjudicationsColumns = [{field: "name", header: "Adjudicatario"}, {field: "value", header: "Valor"} ];
  backLink: string = "";

  faExternalLinkAlt = faExternalLinkAlt;
  faBackward = faBackward;
  
  private backLinkSubscription: Subscription | undefined;

    constructor(private navigationService: NavigationService,
                private location: Location) { }

    ngOnInit(): void {
      if (this.contract){
        this.contractData.push(
          {field: 'Plataforma', value: this.contract.plataforma, isExternalLink: false},
          {field: 'Poder adjudicador', value: this.contract.poder_adjudicador, isExternalLink: false},
          {field: 'Identificador de expediente', value: this.contract.identificador_expediente, isExternalLink: false},
          {field: 'Fuente', value: this.contract.fuente, isExternalLink: true},
        );
        this.contract.adjudicaciones.forEach((adjudicacion : Adjudicacion) => {
          this.adjudicationsData.push(
            {field: adjudicacion.nombre, value: adjudicacion.valor, isExternalLink: false}
          );
        });
      }

      this.backLinkSubscription = this.navigationService.getBackLink().subscribe(
        (backLink: string | boolean) => {
          if(typeof backLink === 'string'){
            this.backLink = backLink;
          }
        }
      );
    }

    ngOnDestroy(): void {
      if(this.backLinkSubscription){
        this.backLinkSubscription.unsubscribe();
      }
    }

    public doBackRouting(): void{
      this.location.back();
    }  

  

}


