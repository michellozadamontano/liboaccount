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

import { 
  Router, 
  ActivatedRoute }                from '@angular/router';
import { CuentaMayor }            from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { CuentaMayorService }     from 'src/app/services';

@Component({
  selector: 'app-mayor-edit',
  templateUrl: './mayor-edit.component.html',
  styleUrls: ['./mayor-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MayorEditComponent implements OnInit {

  mayor$ : Observable<CuentaMayor>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private ar              : ActivatedRoute,
    private snackBarService : MatSnackBar,
    private mayorService    : CuentaMayorService
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
   // this.store.dispatch(new fromStore.LoadCuentaMayorById(id));
   // this.mayor$ = this.store.select(fromStore.getMayor);
      this.mayor$ = this.mayorService.getCuentaMayorById(id);
  }
  submit(mayor: CuentaMayor)
  {
    this.mayorService.updateCuentaMayor(mayor).subscribe(resp => {
      this.router.navigate(['clasificadores/mayor']);
      this.snackBarService.dismiss();
      this.snackBarService.open( "Registro actualizado!", undefined, {duration: 2000} );     
      return;   
    })    
  }

}
