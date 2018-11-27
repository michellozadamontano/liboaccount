import { ChangeDetectionStrategy,Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable }                       from 'rxjs';
import { CuentaPrint }                      from 'src/app/clasificadores/models/cuenta_print.interface';
import {MatTableDataSource, MatDialog} 		  from '@angular/material';
import {MatPaginator, MatSort}              from '@angular/material';
import * as jspdf                           from 'jspdf'; 

@Component({
  selector: 'app-cuenta-print',
  templateUrl: './cuenta-print.component.html',
  styleUrls: ['./cuenta-print.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaPrintComponent implements OnInit {
  @Input()cuentaPrint  : CuentaPrint[];

  public displayedColumns = ['Tipo Cuenta','Cuenta','Descripción','Moneda'];
  resultsLength = 0;  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  @ViewChild('content') content: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.cuentaPrint);
    
  }
  print()
  {
    let pdf = new jspdf(); // A4 size page of PDF  
     let elementHandler = {
       '#editor': function(element, renderer){
          return true;
       }
     };
     let content = this.content.nativeElement;      
     pdf.fromHTML(content.innerHTML,15,15,{
       'width':'100%',
       'elementHandlres': elementHandler
     });     
      
      pdf.save('Cuentas.pdf'); // Generated PDF
  }

}
