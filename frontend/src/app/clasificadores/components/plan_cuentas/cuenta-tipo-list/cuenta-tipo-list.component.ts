import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges
}                                           from '@angular/core';

import { MatTableDataSource, MatDialog } 		from '@angular/material';
import { MatPaginator, MatSort }            from '@angular/material';
import { CuentaTipo }                       from 'src/app/clasificadores/models/cuenta_tipo.interface';

@Component({
  selector: 'app-cuenta-tipo-list',
  templateUrl: './cuenta-tipo-list.component.html',
  styleUrls: ['./cuenta-tipo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoListComponent implements OnInit, OnChanges {

  @Input() cuentaTipoList    : CuentaTipo[];
  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  public displayedColumns = ['Codigo','Nombre','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.cuentaTipoList != null)
    {
      this.dataSource = new MatTableDataSource(this.cuentaTipoList);
      this.resultsLength = this.cuentaTipoList.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  update(id:number)
  {
    this.edit.emit(id);
  }
  remove(id:number)
  {
    this.delete.emit(id);
  }

}
