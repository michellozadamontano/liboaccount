import { ChangeDetectionStrategy, 
  Component, OnInit 
}                               from '@angular/core';

// ngrx
import { Store }                from '@ngrx/store';
import { Observable }           from 'rxjs';
import * as fromStore           from '../../../store';

import { Router }               from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Generico } from 'src/app/clasificadores/models/generico.interface';
import { Tasas } from 'src/app/clasificadores/models/tasas.interface';

@Component({
  selector: 'app-generico-new',
  templateUrl: './generico-new.component.html',
  styleUrls: ['./generico-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericoNewComponent implements OnInit {

  tasas$ : Observable<Tasas[]>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTasas());
    this.tasas$ = this.store.select(fromStore.getTasas);
  }

  submit(generico: Generico)
  {          
    this.store.dispatch(new fromStore.CreateGenerico(generico));  
    this.store.select(fromStore.getGenericoMessage).subscribe(resp =>{
      console.log(resp);
      
      if(resp == '1')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;     
      }
      if(resp = 'ok')
      {
        this.router.navigate(['clasificadores/generico']);
      }
    })
        
  }

}
