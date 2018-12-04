import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy,
  Output, EventEmitter, 
  Input, OnChanges
 }                                                    from '@angular/core';
import {FormBuilder, FormGroup, Validators}           from '@angular/forms';
import { SubArea } from 'src/app/clasificadores/models/subarea.interface';
import { Area } from 'src/app/clasificadores/models/area.interface';
import { AreaList } from 'src/app/clasificadores/models/area_list.interface';

@Component({
  selector: 'app-subarea-form',
  templateUrl: './subarea-form.component.html',
  styleUrls: ['./subarea-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubareaFormComponent implements OnInit, OnChanges {

  @Input() subarea: SubArea = {
    id          : undefined,
    area_id     : undefined,
    nombre      : "",
    responsable : ""
  }
  @Input() areas: AreaList[];
  @Output() save = new EventEmitter<SubArea>();
  @Output() loadSubArea = new EventEmitter<any>();

  form: FormGroup;
  constructor(
    public formBuilder      : FormBuilder,
    ) { this.createForm()}

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.subarea)
    {
      this.form.patchValue({...this.subarea})
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'id'          : [this.subarea.id], 
      'area_id'     : [this.subarea.area_id, Validators.required],  
      'nombre'      : [this.subarea.nombre, Validators.required],
      'responsable' : [this.subarea.responsable, Validators.required],
      
    });
  }
  submit()
  {
    if (this.form.valid) {     
      this.save.emit(this.form.value);
    }
  }
  LoadSubArea(event :any){
    this.loadSubArea.emit(event.value);
  }

}
