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

import { Router }                 from '@angular/router';
import { Actividades }            from 'src/app/clasificadores/models/actividades.interface';

@Component({
  selector: 'app-actividad-new',
  templateUrl: './actividad-new.component.html',
  styleUrls: ['./actividad-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActividadNewComponent implements OnInit {

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
  }
  submit(actividad: Actividades)
  {
    this.store.dispatch(new fromStore.CreateActividad(actividad));
    this.store.select(fromStore.getActividaMessage).subscribe(resp => {
      if(resp == '1')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;     
      }
      if(resp == 'ok')
      {
        this.router.navigate(['clasificadores/actividad']);
      }
    })
    
  }

}
