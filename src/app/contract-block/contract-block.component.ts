import { Component, Input, OnInit } from '@angular/core';
import { Contrato } from '../models/contrato.model';
import { faFileSignature,
         faCalendarDay,
         faEuroSign,
         faBuilding,
         faPaperclip,
         faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contract-block',
  templateUrl: './contract-block.component.html',
  styleUrls: ['./contract-block.component.css']
})
export class ContractBlockComponent implements OnInit {
  faFileSignature = faFileSignature;
  faCalendarDay = faCalendarDay;
  faEuroSign = faEuroSign;
  faBuilding = faBuilding;
  faPaperclip = faPaperclip;
  faLink = faLink;

  @Input() contract: Contrato | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
