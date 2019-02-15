import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy 
}                                 from '@angular/core';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { MatSnackBar }            from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';
import { Actividades }            from 'src/app/clasificadores/models/actividades.interface';
import { ActividadesService }     from 'src/app/services';

@Component({
  selector: 'app-actividad-edit',
  templateUrl: './actividad-edit.component.html',
  styleUrls: ['./actividad-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActividadEditComponent implements OnInit {

  actividad$ : Observable<Actividades>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,
    private actividadService: ActividadesService,  
    private router          : Router,
    private ar              : ActivatedRoute,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
    console.log(id);
    this.actividad$ = this.actividadService.getActividadById(id);
  }
  submit(actividad: Actividades)
  {
    this.store.dispatch(new fromStore.UpdateActividad(actividad));
    this.store.select(fromStore.getActividaMessage).subscribe(resp => {      
      if(resp == 'ok')
      {
        this.router.navigate(['clasificadores/actividad']);
        this.snackBarService.dismiss();
        this.snackBarService.open( "Registro actualizado!", undefined, {duration: 2000} );     
        return;   
      }
      if(resp == '1')
      {        
        this.snackBarService.dismiss();
        this.snackBarService.open( "Posibble duplicación de codigo!", undefined, {duration: 2000} );     
        return;   
      }
    })
    
  }


}
