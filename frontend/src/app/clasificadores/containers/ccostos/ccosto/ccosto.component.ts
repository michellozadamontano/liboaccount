import { ChangeDetectionStrategy, Component, OnInit, ViewChild }                from '@angular/core';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { CcostoList } from '../../../models/ccosto_list.interface';
import { Router }       from '@angular/router';
import { Ccosto } from '../../../models/ccosto.interface';
import { Cuenta } from 'src/app/clasificadores/models/cuenta.interface';
import { CuentaPrint } from 'src/app/clasificadores/models/cuenta_print.interface';

@Component({
  selector: 'app-ccosto',
  templateUrl: './ccosto.component.html',
  styleUrls: ['./ccosto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CcostoComponent implements OnInit {  

  costoList$ : Observable<CcostoList[]>;
  

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router
  ) { }

  ngOnInit() {
    this.costoList$ = this.store.select(fromStore.getCostos);
    this.store.dispatch(new fromStore.LoadCosto());         
  }
  
  Add()
  {
    this.router.navigate(['clasificadores/ccosto_new']);
  }
  cancel()
  {
    this.router.navigate(['clasificadores/ccosto']);
  }
  edit(id:number)
  {
    this.store.dispatch(new fromStore.LoadCostoById(id));
    this.router.navigate(['clasificadores/ccosto_edit/',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteCosto(id));
    }
    
  }

}
