import { ChangeDetectionStrategy, 
  Component, OnInit, ViewChild 
}                               from '@angular/core';

// ngrx
import { Store }                from '@ngrx/store';
import { Observable }           from 'rxjs';
import * as fromStore           from '../../../store';

import { Router }               from '@angular/router';
import { MatSnackBar, 
  MatPaginator, MatSort, MatTableDataSource, MatDialog }       from '@angular/material';
import { Generico }             from 'src/app/clasificadores/models/generico.interface';
import { GenericoList }         from 'src/app/clasificadores/models/generico_list.interface';
import { Submayor }             from 'src/app/clasificadores/models/submayor.interface';
import { FormGroup, 
  FormBuilder, 
  Validators }                  from '@angular/forms';
import { DialogSubmayorEditComponent } from 'src/app/clasificadores/dialogs/dialog-submayor-edit/dialog-submayor-edit.component';

@Component({
  selector: 'app-submayor-index',
  templateUrl: './submayor-index.component.html',
  styleUrls: ['./submayor-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmayorIndexComponent implements OnInit {

  genericoList$ : Observable<GenericoList[]>;
  submayorList$ : Observable<Submayor[]>;
  submayor$ : Observable<Submayor>
  

  form: FormGroup;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar,
    public formBuilder      : FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadGenerico());
    this.genericoList$ = this.store.select(fromStore.getGenericoList);
    this.submayorList$ = this.store.select(fromStore.getSubmayorList);   
    
  }
  
  update(submayor: Submayor)
  {   
    const dialogRef = this.dialog.open(DialogSubmayorEditComponent, {
      width: '50%',
      data:  submayor
    });
    
      dialogRef.afterClosed().subscribe(submayor => {
       this.store.dispatch(new fromStore.UpdateSubmayor(submayor));       
      });
    
  }
  remove(submayor:Submayor)
  {
    this.store.dispatch(new fromStore.DeleteSubmayor(submayor));
  }
  submit(submayor: Submayor)
  {   
    console.log(submayor);
    
    this.store.dispatch(new fromStore.CreateSubmayor(submayor));
   // this.tempo(submayor.generico_id);
    
  }
  LoadSubmayor(event: any)
  {
    this.store.dispatch(new fromStore.LoadSubmayor(event.value));    
  }
  tempo(generico_id: number)
  {
    this.store.dispatch(new fromStore.LoadSubmayor(generico_id));
  }

}
