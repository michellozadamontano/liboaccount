import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  EventEmitter,
  Output,
  OnChanges
}                                     from '@angular/core';
import { Entidad }                    from 'src/app/clasificadores/models/entidad.interface';
import { 
  FormGroup, 
  FormBuilder, 
  Validators }                        from '@angular/forms';
import { Router }                     from '@angular/router';
import { Provincia }                  from 'src/app/clasificadores/models/provincia.interface';

@Component({
  selector: 'app-entidad-form',
  templateUrl: './entidad-form.component.html',
  styleUrls: ['./entidad-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntidadFormComponent implements OnInit, OnChanges {

  @Input() entidad: Entidad = {
    id          : undefined,
    codigo      : '',
    nombre      : '',
    direccion   : '',
    provincia_id: undefined,
    corporacion : '',
    compania    : ''
  }
  @Input() provincia: Provincia[];
  @Output() save = new EventEmitter<Entidad>();
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
    if (this.entidad) {
      this.form.patchValue({...this.entidad});     
      
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'id'            : [this.entidad.id],
      'codigo'        : [this.entidad.codigo, Validators.required],
      'nombre'        : [this.entidad.nombre, Validators.required],
      'direccion'     : [this.entidad.direccion, Validators.required],
      'provincia_id'  : [this.entidad.provincia_id, Validators.required],
      'corporacion'   : [this.entidad.corporacion, Validators.required],
      'compania'      : [this.entidad.compania, Validators.required],
    });
  }
  submit() {
    if (this.form.valid) {     
      this.save.emit(this.form.value);
    }
  }
  cancel()
  {
    this.router.navigate(['clasificadores/entidad']);
  }

}
