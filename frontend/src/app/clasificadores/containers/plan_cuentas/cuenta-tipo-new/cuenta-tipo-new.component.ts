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
import { CuentaMayor }            from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { CuentaTipoService, CuentaMayorService }      from 'src/app/services';

@Component({
  selector: 'app-cuenta-tipo-new',
  templateUrl: './cuenta-tipo-new.component.html',
  styleUrls: ['./cuenta-tipo-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoNewComponent implements OnInit {

  cuentaMayorList$ : Observable<CuentaMayor[]>

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar,
    private tipoService     : CuentaTipoService,
    private mayorService    : CuentaMayorService
  ) { }

  ngOnInit() {
    this.cuentaMayorList$ = this.mayorService.getCuentaMayor();
  }

  submit(cuentaTipo: CuentaTipo)
  {
      
    this.tipoService.createCuentaTipo(cuentaTipo).subscribe(resp =>{
      console.log(resp);
      this.router.navigate(['clasificadores/cuenta_tipo']);
    })    
  }

}
