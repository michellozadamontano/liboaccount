import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter, OnChanges }  from '@angular/core';
import {FormBuilder, FormGroup, Validators}           from '@angular/forms';
import { Router }                                     from '@angular/router';
import { Cuenta }     from 'src/app/clasificadores/models/cuenta.interface';
import { Moneda }     from 'src/app/clasificadores/models/moneda.interface';
import { TipoCuenta } from 'src/app/clasificadores/models/tipo_cuenta.interface';
import { CcostoList } from 'src/app/clasificadores/models/ccosto_list.interface';

@Component({
  selector: 'app-cuenta-form',
  templateUrl: './cuenta-form.component.html',
  styleUrls: ['./cuenta-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaFormComponent implements OnInit, OnChanges {
  @Input() cuenta: Cuenta = {
    id              : undefined,
    cuenta          : '',
    descripcion     : '',
    moneda_id       : undefined,
    tipo_cuenta_id  : undefined,
    ccosto_id       : undefined,
    predeterminada  : false
  }
  @Input() monedas    : Moneda[];
  @Input() tipocuenta : TipoCuenta[];
  @Input() ccostos    : CcostoList[];
  @Output() save      = new EventEmitter<Cuenta>();

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.createForm();
  }

  ngOnInit() {  
    
  }
  ngOnChanges() {
    if (this.cuenta) {
      this.form.patchValue({...this.cuenta});
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'id'              : [this.cuenta.id],
      'cuenta'          : [this.cuenta.cuenta, Validators.required],
      'descripcion'     : [this.cuenta.descripcion, Validators.required],
      'moneda_id'       : [this.cuenta.moneda_id, Validators.required],
      'tipo_cuenta_id'  : [this.cuenta.tipo_cuenta_id, Validators.required],
      'ccosto_id'       : [this.cuenta.ccosto_id],
      'predeterminada'  : [this.cuenta.predeterminada]
    });
  }
  submit() {
    
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.router.navigate(['clasificadores/cuentas']);
    }
    
  }
  cancel()
  {
    this.router.navigate(['clasificadores/cuentas']);
  }

}
