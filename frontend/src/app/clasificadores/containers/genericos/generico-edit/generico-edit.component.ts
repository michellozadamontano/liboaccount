import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { CcostoList } from '../../../models/ccosto_list.interface';
import { Router, ActivatedRoute }       from '@angular/router';
import { Generico } from 'src/app/clasificadores/models/generico.interface';
import { Tasas } from 'src/app/clasificadores/models/tasas.interface';

@Component({
  selector: 'app-generico-edit',
  templateUrl: './generico-edit.component.html',
  styleUrls: ['./generico-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericoEditComponent implements OnInit {

  generico$ : Observable<Generico>;
  tasas$ : Observable<Tasas[]>;
  message$ : Observable<string>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router,
    private ar : ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.GenericoById(id));
    this.store.dispatch(new fromStore.LoadTasas());
    this.tasas$ = this.store.select(fromStore.getTasas);
    this.generico$ = this.store.select(fromStore.getGenerico);
   this.message$ = this.store.select(fromStore.getGenericoMessage);
    
  }
  submit(generico: Generico)
  {
      this.store.dispatch(new fromStore.UpdateGenerico(generico));
      this.router.navigate(['clasificadores/generico']);
  }

}
