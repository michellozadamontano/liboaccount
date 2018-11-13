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
  form	          : FormGroup;
  monedas$        : Observable<Moneda[]>;
  cuentaTitulo$   : Observable<CuentaPrint[]>;
  cuentaDepre$    : Observable<CuentaPrint[]>;
  cuentaFaltante$ : Observable<CuentaPrint[]>;
  cuentaSobrante$ : Observable<CuentaPrint[]>;
  message$        : Observable<string>;
 

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
    this.message$         = this.store.select(fromStore.getTasasMessage);

    this.store.dispatch(new fromStore.CargaMoneda());

    // aqui voy a disparar los eventos para caragar todas las cuentas segun sun tipos
    this.store.dispatch(new fromStore.LoadCuentaTitulo(7));
    this.store.dispatch(new fromStore.LoadCuentaDepre(2));
    this.store.dispatch(new fromStore.LoadCuentaSobrante(5));
    this.store.dispatch(new fromStore.LoadCuentaFaltante(6));

    this.createForm();
    
  }

  //---------------------------------------------------------------------------
	// creating the Form
	//---------------------------------------------------------------------------
	createForm() {
		this.form = this.fb.group({
      'codigo'			    : ['', Validators.compose([Validators.required])],
      'tasa'			      : ['', Validators.compose([Validators.required])],
      'descripcion'		  : ['', Validators.compose([Validators.required])],
      'moneda'    		  : ['', Validators.compose([Validators.required])],
			'cuenta_titulo'   : ['', Validators.compose([Validators.required])],
      'cuenta_depre'	  : ['', Validators.compose([Validators.required])],
      'cuenta_sobrante'	: ['', Validators.compose([Validators.required])],
      'cuenta_faltante'	: ['', Validators.compose([Validators.required])],      

		});
  }
  closeDialog()
  {
    this.dialogRef.close();
  }
  save()
  {
    let content = {
      tasa                : this.form.value.tasa,
      descripcion         : this.form.value.descripcion,
      cod_tasa            : this.form.value.codigo,
      moneda_id           : this.form.value.moneda,
      cuentaTitulo_id     : this.form.value.cuenta_titulo,
      cuentaDepre_id      : this.form.value.cuenta_depre,
      cuentaSobrante_id   : this.form.value.cuenta_sobrante,
      cuentaFaltante_id   : this.form.value.cuenta_faltante
    }
    this.store.dispatch(new fromStore.InsertTasa(content));
    let message = "";
    this.message$.subscribe(message => {
      console.log(message);
      
      message = message
    });    
      this.snackBarService.dismiss();    
      this.snackBarService.open( 'message', undefined, {duration: 2000} ); 
      
    
  }
  update()
  {

  }

}
