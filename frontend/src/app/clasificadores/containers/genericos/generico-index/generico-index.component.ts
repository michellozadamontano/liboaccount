import { ChangeDetectionStrategy, 
  Component, OnInit 
}                               from '@angular/core';

// ngrx
import { Store }                from '@ngrx/store';
import { Observable }           from 'rxjs';
import * as fromStore           from '../../../store';

import { Router }               from '@angular/router';
import { GenericoList } from 'src/app/clasificadores/models/generico_list.interface';

@Component({
  selector: 'app-generico-index',
  templateUrl: './generico-index.component.html',
  styleUrls: ['./generico-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericoIndexComponent implements OnInit {
  genericoList$ : Observable<GenericoList[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadGenerico());
    this.genericoList$ = this.store.select(fromStore.getGenericoList);
  }
  Add()
  {
    this.router.navigate(['clasificadores/generico_new']);
    
  }
  edit(id: number)
  {
    this.router.navigate(['clasificadores/generico_edit/',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteGenerico(id));
    }
  }
  Print()
  {
    
  }
  Submayor()
  {
    this.router.navigate(['clasificadores/submayor']);
  }

}
