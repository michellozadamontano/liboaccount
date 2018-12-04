import { 
  ChangeDetectionStrategy, 
  Component, EventEmitter,
  OnInit, OnChanges, Input, 
  Output 
}                                           from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router }                           from '@angular/router';
import { CcostoList }                       from 'src/app/clasificadores/models/ccosto_list.interface';
import { Area }                             from 'src/app/clasificadores/models/area.interface';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaFormComponent implements OnInit,  OnChanges {
  @Input() area: Area = {
    id          : undefined,
    ccosto_id   : undefined,
    nombre      : "",
    responsable : "",
    almacen     : 0
  }
  @Input() ccostos : CcostoList[];
  @Output() save = new EventEmitter<Area>();

  form: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.createForm()
  }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.area) {
      this.form.patchValue({...this.area});     
      
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'id'            :[this.area.id],
      'ccosto_id'     : [this.area.ccosto_id, Validators.required],
      'nombre'        : [this.area.nombre, Validators.required],
      'responsable'   : [this.area.responsable, Validators.required],
      'almacen'       : [this.area.almacen],
      
    });
  }
  submit() {
    if (this.form.valid) {     
      this.save.emit(this.form.value);
    }
  }
  cancel()
  {
    this.router.navigate(['clasificadores/areas']);
  }

}
