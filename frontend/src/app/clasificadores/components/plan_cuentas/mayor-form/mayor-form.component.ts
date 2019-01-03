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
import { CuentaMayor }                from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { MatSnackBar }                from '@angular/material';

@Component({
  selector: 'app-mayor-form',
  templateUrl: './mayor-form.component.html',
  styleUrls: ['./mayor-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MayorFormComponent implements OnInit, OnChanges {

  @Input() mayor: CuentaMayor = {
    id    : undefined,
    codigo: '',
    nombre: ''
  }
  @Input()  code      : string = null;
  @Output() save      = new EventEmitter<CuentaMayor>();
  @Output() checkCode = new EventEmitter<string>();

  loading     = false;
  ifRefresch  = true;
  ifCode      : number = 0;

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private snackBarService : MatSnackBar,
  ) { 
    this.createForm();
  }

  ngOnInit() {    
    
  }
  ngOnChanges()
  {     
    this.loading = false;
    if(this.code != null && this.code != undefined)
    {      
      this.ifRefresch = false;     
    }
    
    if (this.mayor && this.ifRefresch) {
      this.form.patchValue({...this.mayor});
    }

  }

  createForm(){
    this.form = this.formBuilder.group({
      'id'              : [this.mayor.id],
      'codigo'          : [this.mayor.codigo, Validators.required],
      'nombre'          : [this.mayor.nombre, Validators.required],          
    });
  }
  submit()
  {
    if (this.form.valid) {
      if(this.code != null) {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;
      }
      else{
        this.save.emit(this.form.value);     
      }
      
    }     
  }
  cancel()
  {
    this.router.navigate(['clasificadores/mayor']);
  }
  checkCodeClick(e:any){      
    
    this.checkCode.emit(e.target.value);
  }

}
