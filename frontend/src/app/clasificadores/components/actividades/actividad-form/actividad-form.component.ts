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
import { Actividades }                from 'src/app/clasificadores/models/actividades.interface';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActividadFormComponent implements OnInit, OnChanges {
  @Input() actividad: Actividades = {
    id              : undefined,
    codigo          : '',
    nombre          : '',
    gasto_permitido :undefined
  }

  @Output() save = new EventEmitter<Actividades>();

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.createForm();
  }
  ngOnInit() {
  }
  ngOnChanges(){
    if (this.actividad) {
      this.form.patchValue({...this.actividad});
    }

  }
  submit()
  {
    if (this.form.valid) {
      this.save.emit(this.form.value);
     // this.router.navigate(['clasificadores/actividad']);
    }     
  }
  createForm(){
    this.form = this.formBuilder.group({
      'id'              : [this.actividad.id],
      'codigo'          : [this.actividad.codigo, Validators.required],
      'nombre'          : [this.actividad.nombre, Validators.required], 
      'gasto_permitido' : [this.actividad.gasto_permitido, Validators.required],
    });
  }
  cancel()
  {
    this.router.navigate(['clasificadores/actividad']);
  }

}
