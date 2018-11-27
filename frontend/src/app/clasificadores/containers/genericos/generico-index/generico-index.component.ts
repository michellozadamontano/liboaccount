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
    console.log('testing');
    
  }
  edit(id: number)
  {

  }
  delete(id:number)
  {

  }
  Print()
  {
    
  }

}
