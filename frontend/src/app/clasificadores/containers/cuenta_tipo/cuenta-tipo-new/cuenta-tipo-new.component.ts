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
import { CuentaTipo }             from 'src/app/clasificadores/models/cuenta_tipo.interface';

@Component({
  selector: 'app-cuenta-tipo-new',
  templateUrl: './cuenta-tipo-new.component.html',
  styleUrls: ['./cuenta-tipo-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoNewComponent implements OnInit {

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
  }

  submit(cuentaTipo: CuentaTipo)
  {
    this.store.dispatch(new fromStore.CreateCuentaTipo(cuentaTipo));
    this.store.select(fromStore.getCuentaTipoMessage).subscribe(resp => {
      if(resp == '1')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;     
      }
      if(resp = 'ok')
      {
        this.router.navigate(['clasificadores/cuenta_tipo']);
      }
    })
    
  }

}
