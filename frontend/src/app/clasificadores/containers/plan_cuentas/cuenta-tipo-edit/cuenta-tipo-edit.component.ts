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

import { Router, ActivatedRoute }                 from '@angular/router';
import { CuentaTipo }             from 'src/app/clasificadores/models/cuenta_tipo.interface';
import { CuentaMayor } from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { CuentaTipoService, CuentaMayorService } from 'src/app/services';

@Component({
  selector: 'app-cuenta-tipo-edit',
  templateUrl: './cuenta-tipo-edit.component.html',
  styleUrls: ['./cuenta-tipo-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoEditComponent implements OnInit {

  cuentaTipo$       : Observable<CuentaTipo>;
  cuentaMayorList$  : Observable<CuentaMayor[]>

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private ar              : ActivatedRoute,
    private snackBarService : MatSnackBar,
    private tipoService     : CuentaTipoService,
    private mayorService    : CuentaMayorService
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];  
    this.cuentaTipo$ =this.tipoService.getCuentaTipoById(id);   
    this.cuentaMayorList$ = this.mayorService.getCuentaMayor();
  }
  submit(cuentaTipo: CuentaTipo)
  {
    this.tipoService.updateCuentaTipo(cuentaTipo).subscribe(resp =>{
      console.log(resp);
      
      this.router.navigate(['clasificadores/cuenta_tipo']);
        this.snackBarService.dismiss();
        this.snackBarService.open( "Registro actualizado!", undefined, {duration: 2000} );     
        return;   
    })

   /* this.store.dispatch(new fromStore.UpdateCuentaTipo(cuentaTipo));
    this.store.select(fromStore.getCuentaTipoMessage).subscribe(resp => {
      
      if(resp == '1')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;     
      }
      
      if(resp == 'ok')
      {
        this.router.navigate(['clasificadores/cuenta_tipo']);
        this.snackBarService.dismiss();
        this.snackBarService.open( "Registro actualizado!", undefined, {duration: 2000} );     
        return;   
      }
    })*/
    
  }

}
