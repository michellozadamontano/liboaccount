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
import { CuentaMayor }            from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { CuentaMayorService } from 'src/app/services';

@Component({
  selector: 'app-mayor-new',
  templateUrl: './mayor-new.component.html',
  styleUrls: ['./mayor-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MayorNewComponent implements OnInit {
  code$ : Observable<string>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar,
    private mayorService    : CuentaMayorService
  ) { }

  ngOnInit() {
  }
  submit(mayor: CuentaMayor)
  {
    this.mayorService.createCuentaMayor(mayor.nombre,mayor.codigo).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['clasificadores/mayor']);
    })

    /*this.store.dispatch(new fromStore.CreateCuentaMayor(mayor));
    this.store.select(fromStore.getMayorMessage).subscribe(resp => {
      if(resp == '1')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;     
      }
      if(resp = 'ok')
      {
        this.router.navigate(['clasificadores/mayor']);
      }
    })*/
    
  }
  checkCode(codigo: string)
  {
    this.code$ =  this.mayorService.checkCodeMayor(codigo);
    this.code$.subscribe(resp => {
      if(resp!= null)
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;
      }
    })
  }

}
