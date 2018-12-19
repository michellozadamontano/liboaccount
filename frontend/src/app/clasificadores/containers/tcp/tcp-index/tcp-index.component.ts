import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy 
}                               from '@angular/core';


// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { Router }                 from '@angular/router';
import { Tcp }                    from 'src/app/clasificadores/models/tcp.interface';
import { TcpShow }                from 'src/app/clasificadores/models/tcp_show';
import { Actividades }            from 'src/app/clasificadores/models/actividades.interface';

@Component({
  selector: 'app-tcp-index',
  templateUrl: './tcp-index.component.html',
  styleUrls: ['./tcp-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcpIndexComponent implements OnInit {

  tcp$          : Observable<TcpShow>;
  disable       : boolean = false;
  
  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTcp());    
    this.tcp$         = this.store.select(fromStore.getTcpShow);
    this.tcp$.subscribe(res => {
      if(res)
      {
        this.disable = true;
      }
    })
  }

  add()
  {
    this.router.navigate(['clasificadores/tcp_new']);
  }
  edit(id:number)
  {
    this.router.navigate(['clasificadores/tcp_edit',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteTcp(id));
      this.disable = false;
    }
    
  }

}
