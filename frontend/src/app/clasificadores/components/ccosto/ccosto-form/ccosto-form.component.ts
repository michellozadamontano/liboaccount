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

@Component({
  selector: 'app-ccosto-form',
  templateUrl: './ccosto-form.component.html',
  styleUrls: ['./ccosto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CcostoFormComponent implements OnInit {
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

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
    ) {
    this.createForm()
  }

  ngOnInit() {
    console.log(this.ccosto);
    console.log(this.cuentaGastoDepreDIV);
    
    
  }
  ngOnChanges() {
    if (this.ccosto) {
      this.form.patchValue({...this.ccosto});
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'tipo_control_inventario_id': [this.ccosto.tipo_control_inventario_id],
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

}
