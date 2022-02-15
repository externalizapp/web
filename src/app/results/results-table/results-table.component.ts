import { Contrato } from '../../models/contrato.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { FileSaverService } from 'ngx-filesaver';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  
  @Input() contracts: Contrato[] | undefined;
  @ViewChild('results_table') private results_table: Table | undefined;

  public fieldValues: string[] = ['titulo', 'poder_adjudicador', 'identificador_expediente', 'plataforma'];
  public headerValues: string[] = ['Título', 'Poder Adjudicador', 'Identificador expediente', 'Plataforma'];
  public columns: any[];
  
  constructor(private fileSaverService: FileSaverService, 
              private router: Router) {
    if (this.fieldValues.length != this.headerValues.length){
      console.warn("FieldValues doesn't fit headerValues in results-table.component.ts");
    } 

    this.columns = [];
    for (let i=0; i < this.fieldValues.length; ++i ){
      this.columns.push({
        field: this.fieldValues[i],
        header: this.headerValues[i]
      });      
    }
  }
  
  ngOnInit(): void {    
  }

  clear(table: Table): void {
    table.clear();
  }

  doInput(event: Event) : void {
    const { target } = event;
    if (this.results_table && target) this.results_table.filterGlobal((target as HTMLButtonElement).value, 'contains');
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {    
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    this.fileSaverService.save(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );    
  }

  exportExcel(): void {
    if(this.contracts){
      const worksheet = XLSX.utils.json_to_sheet(this.contracts);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "contracts");
    }
  }

  openContractInfo(idContract: number) : void {
        this.router.navigate(['/view'], { queryParams: {'idContract': idContract}});
  }

}
