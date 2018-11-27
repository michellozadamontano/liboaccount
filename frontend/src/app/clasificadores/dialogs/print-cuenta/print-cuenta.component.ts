import { ChangeDetectionStrategy,Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

import { Store }             from '@ngrx/store';
import { Observable }        from 'rxjs';
import * as fromStore        from '../../store';
import { Moneda }            from '../../models/moneda.interface';
import { TipoCuenta }        from '../../models/tipo_cuenta.interface';


import html2canvas           from 'html2canvas';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CuentaPrint } from '../../models/cuenta_print.interface';

@Component({
  selector: 'app-print-cuenta',
  templateUrl: './print-cuenta.component.html',
  styleUrls: ['./print-cuenta.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintCuentaComponent implements OnInit {

    tipoCuenta$   : Observable<TipoCuenta[]>;
    cuentaPrint$  : Observable<CuentaPrint[]>;
    tipocuentaId  : number;

    @ViewChild('content') content: ElementRef;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private dialogRef       : MatDialogRef<PrintCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.tipoCuenta$ = this.store.select(fromStore.getTipoCuentas);
    this.cuentaPrint$ = this.store.select(fromStore.getCuentaPrint);
    this.store.dispatch(new fromStore.LoadTipoCuenta());       
    
  }

  cancel()
  {
    this.dialogRef.close();
  }
  showCuentas()
  {
    console.log(this.tipocuentaId);
    
    this.store.dispatch(new fromStore.LoadTipoCuenta());
    this.store.dispatch(new fromStore.LoadCuentaPrint(this.tipocuentaId));  
    
    // var data = document.getElementById('contentToConvert');  
     
    
   /* html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
     pdf.text('Reporte de Cuentas',1,1);  
     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 

      
      pdf.save('Cuentas.pdf'); // Generated PDF   
    });  */
    
  }

}
