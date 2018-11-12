import { Component, OnInit, Inject, Input } from '@angular/core';

//---------------------------
// Material Dialog
//---------------------------

import { MAT_DIALOG_DATA }          from "@angular/material";
import { MatDialogRef }             from "@angular/material";
import { MatSnackBar } 						  from "@angular/material/snack-bar";

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
import { TipoCuenta }               from '../../models/tipo_cuenta.interface';
import { Cuenta }                   from '../../models/cuenta.interface';
import { map, tap } from 'rxjs/operators';
import { Ccosto }                   from '../../models/ccosto.interface';
import { ThrowStmt }                from '@angular/compiler';
import { CuentaList }               from '../../models/cuenta_list.interface';

@Component({
  selector: 'app-form-cuenta',
  templateUrl: './form-cuenta.component.html',
  styleUrls: ['./form-cuenta.component.css']
})
export class FormCuentaComponent implements OnInit {
  //@Input() id:any;

  form	      : FormGroup;
  monedas$    : Observable<Moneda[]>;
  //tipocuenta$ : Observable<TipoCuenta[]>;
  tipocuenta  : TipoCuenta[] = [];
  cuenta      : CuentaList[];
  ccosto$     : Observable<Ccosto[]>;
  message     : string;
  objetcuenta$: Observable<any> = null;

  // datos iniciales del formulario;
  formCuenta        : string = "";
  formDescripcion   : string = "";
  formMoneda        : number;
  formTipoCuenta    : number;
  formCcosto        : number;
  formPredeterminada: boolean = false;
  id:any;


  constructor(    
    private fb              : FormBuilder,
    private store           : Store<fromStore.ClasificadorState>,
    private dialogRef       : MatDialogRef<FormCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBarService :MatSnackBar
  ) {
    
  }

  ngOnInit() {
    this.monedas$ = this.store.select(fromStore.getMonedas);
    this.ccosto$  = this.store.select(fromStore.getCostos);    
    
    //this.tipocuenta$ = this.store.select(fromStore.getTipoCuentas);
    this.store.select(fromStore.getTipoCuentas).subscribe(tipo => 
      {this.tipocuenta = tipo;        
        
      });
    this.store.select(fromStore.getCuenta).subscribe(cuent => {
      this.cuenta = cuent;      
      console.log(this.cuenta);     
    
    });
    this.store.select(fromStore.getTipoCuentaLoaded).subscribe(load =>{
      console.log(load);      
    });
    this.store.select(fromStore.getCuentaMessage).subscribe(message =>{this.message = message; console.log(message);
    });
    // disparadores 
    this.store.dispatch(new fromStore.LoadCosto());    
    this.store.dispatch(new fromStore.CargaMoneda());
    this.store.dispatch(new fromStore.LoadTipoCuenta());
    
    if(this.data.id != undefined)
    {
      console.log(this.data.id);
      this.id = this.data.id;
      this.objetcuenta$ = this.store.select(fromStore.getCuentaById);
      this.store.dispatch(new fromStore.LoadCuentaById(this.data.id))
      
      this.createForm();
      this.objetcuenta$.subscribe(data => this.form.patchValue(data));
     
    }
    else{
      this.createForm();
    }
   
  }

  //---------------------------------------------------------------------------
	// creating the Form
	//---------------------------------------------------------------------------
	createForm() {
		this.form = this.fb.group({
			'cuenta'			    : ['', Validators.compose([Validators.required])],
      'descripcion'		  : ['', Validators.compose([Validators.required])],
      'moneda'    		  : ['', Validators.compose([Validators.required])],
			'predeterminada'  : [''],
      'tipo'	          : ['', Validators.compose([Validators.required])],
      'ccosto'          : ['']

		});
	}

  //---------------------------------------------------------------------------
  // Public Methods Section
  //---------------------------------------------------------------------------
  closeDialog()
  {      
      this.dialogRef.close();
  }
  save()
  {
    console.log(this.form.value);
    if(this.form.value.cuenta == "" || this.form.value.descripcion == "" || 
      this.form.value.moneda == "" || this.form.value.tipo_cuenta == "")
    {
      this.snackBarService.dismiss();
      this.snackBarService.open( "Verifique que no falte ningun dato!", undefined, {duration: 2000} );     
      return;
    }
    let predet = this.form.value.predeterminada;
    console.log(predet);
    
    if(predet == "" || predet == undefined)
    {
      predet = false;
    }
    const cuent = {
      moneda_id       : this.form.value.moneda,
      tipo_cuenta_id  : this.form.value.tipo,
      cuenta          : this.form.value.cuenta,
      descripcion     : this.form.value.descripcion,
      ccosto_id       : this.form.value.ccosto != ""? this.form.value.ccosto : null,
      predeterminada  : this.form.value.predeterminada
    }
    console.log(cuent);
    
    const actions = new fromStore.InsertCuenta(cuent);
    this.store.dispatch(actions);
    console.log(this.cuenta);
    this.dialogRef.close();
  }
  update()
  {
    console.log('update michelito');
    

    if(this.form.value.cuenta == "" || this.form.value.descripcion == "" || 
      this.form.value.moneda == "" || this.form.value.tipo_cuenta == "")
    {
      this.snackBarService.dismiss();
      this.snackBarService.open( "Verifique que no falte ningun dato!", undefined, {duration: 2000} );
      return;
    }
    
    const cuent = {
      moneda_id       : this.form.value.moneda,
      tipo_cuenta_id  : this.form.value.tipo,
      cuenta          : this.form.value.cuenta,
      descripcion     : this.form.value.descripcion,
      ccosto_id       : this.form.value.ccosto != ""? this.form.value.ccosto : null,
      predeterminada  : this.form.value.predeterminada
    }
    this.store.dispatch(new fromStore.UpdateCuenta({id:this.id,cuenta:cuent}));
    this.dialogRef.close();
  }

}