import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  Output,
  EventEmitter,
  OnChanges
}                                     from '@angular/core';

import {
  FormBuilder, 
  FormGroup, 
  Validators
}                                     from '@angular/forms';
import { Router }                     from '@angular/router';
import { CuentaPlan }                 from 'src/app/clasificadores/models/cuenta_plan.interface';
import { CuentaTipo }                 from 'src/app/clasificadores/models/cuenta_tipo.interface';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanFormComponent implements OnInit, OnChanges {

  @Input() plan: CuentaPlan = {
    id      : undefined,
    codigo  : undefined,
    nombre  : '',
    tipo_id : undefined,
    activa  : 1
  }
  @Input() cuentaTipoList    : CuentaTipo[];
  @Output() save = new EventEmitter<CuentaPlan>();

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }
  ngOnChanges()
  {
    if (this.plan) {
      this.form.patchValue({...this.plan});
    }
  }
  createForm(){
    this.form = this.formBuilder.group({
      'id'              : [this.plan.id],
      'codigo'          : [this.plan.codigo, Validators.required],
      'nombre'          : [this.plan.nombre, Validators.required],   
      'tipo_id'         : [this.plan.tipo_id, Validators.required],   
      'activa'          : this.plan.activa,    
    });
  }
  submit()
  {
    if (this.form.valid) {
      this.save.emit(this.form.value);     
    }     
  }
  cancel()
  {
    this.router.navigate(['clasificadores/plan']);
  }

}
