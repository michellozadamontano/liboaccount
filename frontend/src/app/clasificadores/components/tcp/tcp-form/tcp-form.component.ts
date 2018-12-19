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
import { Tcp } from 'src/app/clasificadores/models/tcp.interface';
import { Actividades } from 'src/app/clasificadores/models/actividades.interface';

@Component({
  selector: 'app-tcp-form',
  templateUrl: './tcp-form.component.html',
  styleUrls: ['./tcp-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcpFormComponent implements OnInit, OnChanges {
  @Input() tcp: Tcp = {
    id          : undefined,    
    nombre      : "",
    nit         : "",
    actividad_id: undefined
  }
  @Input() actividades: Actividades[];
  @Output() save = new EventEmitter<Tcp>();

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
    if (this.tcp) {
      this.form.patchValue({...this.tcp});
    }
  }
  createForm(){
    this.form = this.formBuilder.group({
      'id'              : [this.tcp.id],
      'nombre'          : [this.tcp.nombre, Validators.required],
      'nit'             : [this.tcp.nit, Validators.required],   
      'actividad_id'    : [this.tcp.actividad_id, Validators.required],   
    });
  }

  submit()
  {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.router.navigate(['clasificadores/tcp']);
    }     
  }
  cancel()
  {
    this.router.navigate(['clasificadores/tcp']);
  }

}
