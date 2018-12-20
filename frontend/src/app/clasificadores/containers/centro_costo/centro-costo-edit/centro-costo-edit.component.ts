import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { MatSnackBar }            from '@angular/material';

import { Router, ActivatedRoute }                 from '@angular/router';
import { CentroCosto } from 'src/app/clasificadores/models/centro_costo.interface';

@Component({
  selector: 'app-centro-costo-edit',
  templateUrl: './centro-costo-edit.component.html',
  styleUrls: ['./centro-costo-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CentroCostoEditComponent implements OnInit {

  centroCosto$ : Observable<CentroCosto>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private ar              : ActivatedRoute,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadCentroCostoById(id));
    this.centroCosto$ =  this.store.select(fromStore.getCentroCosto);
  }
  submit(centroCosto: CentroCosto)
  {
    this.store.dispatch(new fromStore.UpdateCentroCosto(centroCosto));
    this.store.select(fromStore.getCuentaTipoMessage).subscribe(resp => {
      
      if(resp = 'ok')
      {
        this.router.navigate(['clasificadores/centro_costo']);
        this.snackBarService.dismiss();
        this.snackBarService.open( "Registro actualizado!", undefined, {duration: 2000} );     
        return;   
      }
    })
    
  }

}
