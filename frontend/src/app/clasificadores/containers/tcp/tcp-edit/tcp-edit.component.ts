import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy 
}                                 from '@angular/core';


// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { Router, ActivatedRoute }                 from '@angular/router';
import { MatSnackBar }            from '@angular/material';
import { Tcp }                    from 'src/app/clasificadores/models/tcp.interface';
import { Actividades }            from 'src/app/clasificadores/models/actividades.interface';

@Component({
  selector: 'app-tcp-edit',
  templateUrl: './tcp-edit.component.html',
  styleUrls: ['./tcp-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcpEditComponent implements OnInit {

  actividades$  : Observable<Actividades[]>;
  tcp$          : Observable<Tcp>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private ar              : ActivatedRoute,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadTcpById(id));
    this.store.dispatch(new fromStore.LoadActividades());

    this.actividades$ = this.store.select(fromStore.getActividadList);
    this.tcp$         = this.store.select(fromStore.getTcp);
  }
  submit(tcp: Tcp)
  {
    this.store.dispatch(new fromStore.UpdateTcp(tcp));
    this.store.select(fromStore.getTcpMessage).subscribe(resp => {     
      if(resp == 'ok')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Tcp Actualizado Correctamente!", undefined, {duration: 2000} ); 
        this.router.navigate(['clasificadores/tcp']);
      }
    })
    
  }

}
