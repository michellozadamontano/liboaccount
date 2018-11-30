import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Generico } from 'src/app/clasificadores/models/generico.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Tasas } from 'src/app/clasificadores/models/tasas.interface';

@Component({
  selector: 'app-generico-form',
  templateUrl: './generico-form.component.html',
  styleUrls: ['./generico-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericoFormComponent implements OnInit, OnChanges {

  @Input() generico: Generico = {
    id: undefined,
    codigo: undefined,
    descripcion: "",
    tasa_id: undefined,
    transrent: undefined
  }
  @Input() tasas : Tasas[];
  @Output() save = new EventEmitter<Generico>();
  readonly = false;

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
   }

  ngOnInit() {
    if (this.generico) {
      if(this.generico.id != undefined){
        this.readonly = true;
      }          
    }
    
  }
  ngOnChanges()
  {
    if (this.generico) {
      this.form.patchValue({...this.generico});           
    }
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      'codigo': [this.generico.codigo, Validators.required],      
      'descripcion': [this.generico.descripcion, Validators.required],
      'tasa_id': [this.generico.tasa_id, Validators.required],
      'transrent': [this.generico.transrent, Validators.required]
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
      this.router.navigate(['clasificadores/generico'])
  }

}
