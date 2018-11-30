import { 
  Component,
  OnInit, 
  ChangeDetectionStrategy 
}                               from '@angular/core';
import { Router }               from '@angular/router';
// ngrx
import { Store }                from '@ngrx/store';
import { Observable }           from 'rxjs';
import * as fromStore           from '../../../store';
import { MatSnackBar }          from '@angular/material';
import { Area } from 'src/app/clasificadores/models/area.interface';
import { CcostoList } from 'src/app/clasificadores/models/ccosto_list.interface';

@Component({
  selector: 'app-area-new',
  templateUrl: './area-new.component.html',
  styleUrls: ['./area-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaNewComponent implements OnInit {

  ccostos$ : Observable<CcostoList[]>;
  message$ : Observable<any>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private router: Router,
    private snackBarService :MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCosto());
    this.ccostos$ = this.store.select(fromStore.getCostos);
    this.message$ = this.store.select(fromStore.getAreaMessage);
  }
  submit( area: Area)
  {
      this.store.dispatch(new fromStore.CreateArea(area));
      this.message$.subscribe(resp =>{
        if(resp == "1")
        {        
          this.snackBarService.dismiss();
          this.snackBarService.open( "Esta nombre de area ya existe para este centro de costo!", undefined, {duration: 2000} );     
          return;    
              
        }
        else
        {
          this.router.navigate(['clasificadores/areas']);
        }        
      })
  }

}
