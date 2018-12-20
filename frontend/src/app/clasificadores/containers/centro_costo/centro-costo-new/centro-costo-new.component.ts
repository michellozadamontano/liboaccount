import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { MatSnackBar }            from '@angular/material';

import { Router }                 from '@angular/router';
import { CentroCosto } from 'src/app/clasificadores/models/centro_costo.interface';


@Component({
  selector: 'app-centro-costo-new',
  templateUrl: './centro-costo-new.component.html',
  styleUrls: ['./centro-costo-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CentroCostoNewComponent implements OnInit {

  constructor(private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar) { }

  ngOnInit() {
  }

  submit(centroCosto: CentroCosto)
  {
    this.store.dispatch(new fromStore.CreateCentroCosto(centroCosto));
    this.store.select(fromStore.getCentroCostoMessage).subscribe(resp => {
      if(resp == '1')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;     
      }
      if(resp = 'ok')
      {
        this.router.navigate(['clasificadores/centro_costo']);
      }
    })
    
  }

}
