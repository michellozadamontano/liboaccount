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
import { CuentaPrint }              from '../../models/cuenta_print.interface';
import { Tasas }                    from '../../models/tasas.interface';


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
  id              : number;
  tasa$           : Observable<Tasas[]>;
  load            : boolean = false;

  //estos son los campos del formulario para cundo decida actualizar
  cod_tasa        : number = null;
  tasa            : number = null;
  descripcion     : string = "";
  moneda          : number = null;
  cuenta_titulo   : number = null;
  cuenta_depre    : number = null;
  cuenta_sobrante : number = null;
  cuenta_faltante : number = null;

  constructor(
    private fb              : FormBuilder,
    private store           : Store<fromStore.ClasificadorState>,
    private dialogRef       : MatDialogRef<FormTasaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBarService :MatSnackBar
  ) { }

  ngOnInit() {
    this.id = this.data.id;
    this.monedas$         = this.store.select(fromStore.getMonedas);
    this.cuentaTitulo$    = this.store.select(fromStore.getCuentaTitulo);
    this.cuentaDepre$     = this.store.select(fromStore.getCuentaDepre);
    this.cuentaSobrante$  = this.store.select(fromStore.getCuentaSobrante);
    this.cuentaFaltante$  = this.store.select(fromStore.getCuentaFaltante);
    this.message$         = this.store.select(fromStore.getTasasMessage);
    this.tasa$            = this.store.select(fromStore.getTasa);

    this.store.dispatch(new fromStore.CargaMoneda());

    // aqui voy a disparar los eventos para caragar todas las cuentas segun sun tipos
    this.store.dispatch(new fromStore.LoadCuentaTitulo(7));
    this.store.dispatch(new fromStore.LoadCuentaDepre(2));
    this.store.dispatch(new fromStore.LoadCuentaSobrante(5));
    this.store.dispatch(new fromStore.LoadCuentaFaltante(6));

    if(this.id != undefined)
    {
      this.cod_tasa         = null;
      this.tasa             = null;
      this.descripcion      = "";
      this.moneda           = null;
      this.cuenta_titulo    = null;
      this.cuenta_depre     = null;
      this.cuenta_sobrante  = null;
      this.cuenta_faltante  = null;
      
      
     // this.store.dispatch(new fromStore.LoadTasaById(this.id));
      this.store.dispatch(new fromStore.LoadTasaCuenta({id:this.id}));
      this.tasa$ = this.store.select(fromStore.getTasa);
      this.tasa$.subscribe(resp =>{console.log(resp);
      });
     /* this.store.select(fromStore.getTasa).subscribe(resp => {
        console.log(resp); 
        if(resp != null || resp != undefined) 
        {
          this.cod_tasa     = resp[0].cod_tasa;
          this.tasa         = resp[0].tasa;
          this.descripcion  = resp[0].descripcion;
          this.moneda       = resp[0].moneda_id; 
        }         
        
      });*/
    /*  this.store.select(fromStore.getTasaCuentas).subscribe(resp => {           
        resp.forEach(x=> {
          if(x.tipoId == 2)
          {
            this.cuenta_depre = x.id
          }
          if(x.tipoId == 5)
          {
            this.cuenta_sobrante = x.id
          }
          if(x.tipoId == 6)
          {
            this.cuenta_faltante = x.id
          }
          if(x.tipoId == 7)
          {
            this.cuenta_titulo = x.id
          }
        })  
        this.load = true;      
      })   */
      this.createForm();
      this.form.setValue(
        {
          codigo:this.cod_tasa,
          tasa:'',
          descripcion:'',
          moneda:'',
          cuenta_titulo:'',
          cuenta_depre: '',
          cuenta_sobrante: '',
          cuenta_faltante: ''
        }
      );
      
    }
    else
    {
      this.load = true;
      this.createForm();
    }

    
    
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
			'cuenta_titulo'   : [this.cuenta_titulo, Validators.compose([Validators.required])],
      'cuenta_depre'	  : [this.cuenta_depre, Validators.compose([Validators.required])],
      'cuenta_sobrante'	: [this.cuenta_sobrante, Validators.compose([Validators.required])],
      'cuenta_faltante'	: [this.cuenta_faltante, Validators.compose([Validators.required])],      

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
    this.message$.subscribe(message => {
      console.log(message);
      
      this.snackBarService.dismiss();    
      this.snackBarService.open( message, undefined, {duration: 2000} ); 
    });    
    this.dialogRef.close();      
    
  }
  update(e)
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
    this.store.dispatch(new fromStore.UpdateTasa({id:this.data.id,tasa:content}));    
    this.message$.subscribe(message => {
      console.log(message);
      
      this.snackBarService.dismiss();    
      this.snackBarService.open( message, undefined, {duration: 2000} ); 
    });    
    this.dialogRef.close();  
    
  }

}
