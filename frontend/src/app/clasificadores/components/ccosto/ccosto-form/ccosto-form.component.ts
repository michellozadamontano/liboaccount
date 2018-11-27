import { 
  ChangeDetectionStrategy, 
  Component, EventEmitter,
  OnInit, OnChanges, Input, 
  Output 
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Ccosto } from 'src/app/clasificadores/models/ccosto.interface';
import { Router } from '@angular/router';
import { CuentaPrint } from 'src/app/clasificadores/models/cuenta_print.interface';
import { CcostoList } from 'src/app/clasificadores/models/ccosto_list.interface';

import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-ccosto-form',
  templateUrl: './ccosto-form.component.html',
  styleUrls: ['./ccosto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CcostoFormComponent implements OnInit, OnChanges {
  @Input() ccosto: Ccosto = {
    tipo_control_inventario_id: undefined,
    codigo: '',
    descripcion: '',
    cuenta_gasto_mn_id: undefined,
    cuenta_gasto_div_id: undefined
  }
  @Input() cuentaGastoDepreMN: CuentaPrint[];
  @Input() cuentaGastoDepreDIV: CuentaPrint[];   

  @Output() save = new EventEmitter<Ccosto>();
  @Output() checkCodigo = new EventEmitter<any>();

  form: FormGroup;
  siCodigo$         : Observable<any>; 
  constructor(
    private store: Store<fromStore.ClasificadorState>,
    public formBuilder: FormBuilder,
    private router: Router
    ) {
    this.createForm()
  }

  ngOnInit() {    
    
  }
  ngOnChanges() {
    if (this.ccosto) {
      this.form.patchValue({...this.ccosto});     
      
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'tipo_control_inventario_id': [this.ccosto.tipo_control_inventario_id, Validators.required],
      'codigo': [this.ccosto.codigo, Validators.required],
      'descripcion': [this.ccosto.descripcion, Validators.required],
      'cuenta_gasto_mn_id': [this.ccosto.cuenta_gasto_mn_id, Validators.required],
      'cuenta_gasto_div_id': [this.ccosto.cuenta_gasto_div_id, Validators.required]
    });
  }
  submit() {
    if (this.form.valid) {     
      this.save.emit(this.form.value);
    }
  }
  cancel()
  {
    this.router.navigate(['clasificadores/ccosto']);
  }
  checkCode(codigo:any)
  {
    //this.checkCodigo.emit(codigo);
    let value = codigo.target.value;
    if(value > 0)
    {
      this.store.dispatch(new fromStore.CheckCodigo(value));      
    }
  }

}
