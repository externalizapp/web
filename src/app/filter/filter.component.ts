import { Component, OnInit } from '@angular/core';

interface PoderAdjudicador {
  idPoderAdjudicador: string,
  nombre: string
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  rangeValues: number[] = [0,100];
  rangeDates: Date[];
  selectedPoderAdjudicador: PoderAdjudicador | undefined;
  poderesAdjudicadores: PoderAdjudicador[];

  constructor() { 
    this.rangeDates = [];
    this.poderesAdjudicadores = [
      {nombre: 'Gobierno de España', idPoderAdjudicador: '1'},
      {nombre: 'Generalitat de Catalunya', idPoderAdjudicador: '2'},
      {nombre: 'Comunidad de Madrid', idPoderAdjudicador: '3'},
      {nombre: 'Ministerio de Sanidad', idPoderAdjudicador: '4'},
      {nombre: 'CatSalut', idPoderAdjudicador: '5'}
  ];
  }

  ngOnInit(): void {
  }

}
