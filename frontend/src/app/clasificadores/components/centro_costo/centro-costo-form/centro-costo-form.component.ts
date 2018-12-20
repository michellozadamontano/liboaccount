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
import { CentroCosto } from 'src/app/clasificadores/models/centro_costo.interface';

@Component({
  selector: 'app-centro-costo-form',
  templateUrl: './centro-costo-form.component.html',
  styleUrls: ['./centro-costo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CentroCostoFormComponent implements OnInit, OnChanges {

  @Input() centroCosto: CentroCosto = {
    id    : undefined,
    codigo: "",
    nombre: ""
  }
  @Output() save = new EventEmitter<CentroCosto>();

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
    if (this.centroCosto) {
      this.form.patchValue({...this.centroCosto});
    }
  }

  createForm(){
    this.form = this.formBuilder.group({
      'id'              : [this.centroCosto.id],
      'codigo'          : [this.centroCosto.codigo, Validators.required],
      'nombre'          : [this.centroCosto.nombre, Validators.required],     
    });
  }

  submit()
  {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.router.navigate(['clasificadores/centro_costo']);
    }     
  }
  cancel()
  {
    this.router.navigate(['clasificadores/centro_costo']);
  }

}
