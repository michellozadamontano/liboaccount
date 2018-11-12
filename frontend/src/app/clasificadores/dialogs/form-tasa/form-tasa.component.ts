import { Component, OnInit, Inject } from '@angular/core';

//---------------------------
// Angular Forms
//---------------------------
import { FormBuilder } 			    		from '@angular/forms';
import { FormGroup } 			    			from '@angular/forms';
import { Validators } 			    		from '@angular/forms';

import { Store }                    from '@ngrx/store';
import { Observable }               from 'rxjs';
import * as fromStore               from '../../store';
import { Moneda }                   from '../../models/moneda.interface';
import { CuentaList }               from '../../models/cuenta_list.interface';

import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CuentaPrint } from '../../models/cuenta_print.interface';


@Component({
  selector: 'app-form-tasa',
  templateUrl: './form-tasa.component.html',
  styleUrls: ['./form-tasa.component.scss']
})
export class FormTasaComponent implements OnInit {
  monedas$        : Observable<Moneda[]>;
  cuentaTitulo$   : Observable<CuentaPrint[]>;
  cuentaDepre$    : Observable<CuentaPrint[]>;
  cuentaFaltante$ : Observable<CuentaPrint[]>;
  cuentaSobrante$ : Observable<CuentaPrint[]>;

  constructor(
    private fb              : FormBuilder,
    private store           : Store<fromStore.ClasificadorState>,
    private dialogRef       : MatDialogRef<FormTasaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBarService :MatSnackBar
  ) { }

  ngOnInit() {
    this.monedas$         = this.store.select(fromStore.getMonedas);
    this.cuentaTitulo$    = this.store.select(fromStore.getCuentaTitulo);
    this.cuentaDepre$     = this.store.select(fromStore.getCuentaDepre);
    this.cuentaSobrante$  = this.store.select(fromStore.getCuentaSobrante);
    this.cuentaFaltante$  = this.store.select(fromStore.getCuentaFaltante);

    
  }

}
