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

@Component({
  selector: 'app-generico-new',
  templateUrl: './generico-new.component.html',
  styleUrls: ['./generico-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericoNewComponent implements OnInit {

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
  }

  submit(generico: Generico)
  {
      this.store.dispatch(new fromStore.CreateGenerico(generico));      
  }

}
