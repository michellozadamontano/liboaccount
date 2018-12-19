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
import { Tcp } from 'src/app/clasificadores/models/tcp.interface';
import { Actividades } from 'src/app/clasificadores/models/actividades.interface';

@Component({
  selector: 'app-tcp-new',
  templateUrl: './tcp-new.component.html',
  styleUrls: ['./tcp-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcpNewComponent implements OnInit {

  actividades$  : Observable<Actividades[]>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadActividades());
    this.actividades$ = this.store.select(fromStore.getActividadList);
  }
  submit(tcp: Tcp)
  {
    this.store.dispatch(new fromStore.CreateTcp(tcp));
    this.store.select(fromStore.getTcpMessage).subscribe(resp => {     
      if(resp == 'ok')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Tcp Creado Correctamente!", undefined, {duration: 2000} ); 
        this.router.navigate(['clasificadores/tcp']);
      }
    })    
  }

}
