import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  Output,
  EventEmitter,
  OnChanges
}                                     from '@angular/core';
import { CuentaTipo }                 from 'src/app/clasificadores/models/cuenta_tipo.interface';
import {
  FormBuilder, 
  FormGroup, 
  Validators
}                                     from '@angular/forms';
import { Router }                     from '@angular/router';

@Component({
  selector: 'app-cuenta-tipo-form',
  templateUrl: './cuenta-tipo-form.component.html',
  styleUrls: ['./cuenta-tipo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoFormComponent implements OnInit, OnChanges {

  @Input() cuentaTipo: CuentaTipo = {
    id    : undefined,
    codigo: "",
    nombre: ""
  }
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
    });
  }

  submit()
  {
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
