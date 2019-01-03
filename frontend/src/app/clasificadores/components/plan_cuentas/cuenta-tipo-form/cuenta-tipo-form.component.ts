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
import { CuentaTipo }                 from 'src/app/clasificadores/models/cuenta_tipo.interface';
import { CuentaMayor }                from 'src/app/clasificadores/models/cuenta_mayor.interface';

@Component({
  selector: 'app-cuenta-tipo-form',
  templateUrl: './cuenta-tipo-form.component.html',
  styleUrls: ['./cuenta-tipo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoFormComponent implements OnInit, OnChanges {

  @Input() cuentaTipo: CuentaTipo = {
    id      : undefined,
    codigo  : "",
    nombre  : "",
    grupo_id: undefined,
    deudora : undefined
  }
  @Input() cuentaMayorList: CuentaMayor[];
  @Output() save = new EventEmitter<CuentaTipo>();

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
     
    if (this.cuentaTipo) {
      this.form.patchValue({...this.cuentaTipo});
    }

  }
  createForm(){
    this.form = this.formBuilder.group({
      'id'              : [this.cuentaTipo.id],
      'codigo'          : [this.cuentaTipo.codigo, Validators.required],
      'nombre'          : [this.cuentaTipo.nombre, Validators.required], 
      'grupo_id'        : [this.cuentaTipo.grupo_id, Validators.required], 
      'deudora'         : [this.cuentaTipo.deudora],   
    });
  }

  submit()
  {
    console.log();
    
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.router.navigate(['clasificadores/cuenta_tipo']);
    }     
  }
  cancel()
  {
    this.router.navigate(['clasificadores/cuenta_tipo']);
  }

}
