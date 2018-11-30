import { Component, OnInit, 
  ChangeDetectionStrategy, 
  Output, EventEmitter, 
  Input, OnChanges }          from '@angular/core';
import {FormBuilder, 
  FormGroup, Validators}      from '@angular/forms';
import { Router }             from '@angular/router';
import { Submayor }           from 'src/app/clasificadores/models/submayor.interface';
import { GenericoList }       from 'src/app/clasificadores/models/generico_list.interface';

@Component({
  selector: 'app-submayor-form',
  templateUrl: './submayor-form.component.html',
  styleUrls: ['./submayor-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmayorFormComponent implements OnInit, OnChanges {

  @Input() submayor: Submayor = {
    id: undefined,
    descripcion: "",
    generico_id: undefined,
    submayor: undefined
  }
  @Input() genericoList: GenericoList[];
  @Output() save = new EventEmitter<Submayor>();
  @Output() loadSubmayor = new EventEmitter<any>();

  form: FormGroup;
  constructor(
    public formBuilder      : FormBuilder,
  ) {
    this.createForm();
   }

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.submayor)
    {
      this.form.patchValue({...this.submayor})
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'generico_id': ['', Validators.required],  
      'descripcion': ['', Validators.required],
      
    });
  }
  submit()
  {
    if (this.form.valid) {     
      this.save.emit(this.form.value);
    }
  }
  LoadSubmayor(event)
  {
      this.loadSubmayor.emit(event);
  }

}
