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
import { CuentaMayor }                      from 'src/app/clasificadores/models/cuenta_mayor.interface';

@Component({
  selector: 'app-mayor-list',
  templateUrl: './mayor-list.component.html',
  styleUrls: ['./mayor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MayorListComponent implements OnInit, OnChanges {

  @Input() mayorList: CuentaMayor[];

  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  public displayedColumns = ['Codigo','Nombre','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() { }

  ngOnInit() {
    console.log(this.mayorList);
    
  }
  ngOnChanges() {
    console.log(this.mayorList);
    if(this.mayorList != null)
    {
      this.dataSource = new MatTableDataSource(this.mayorList);
      this.resultsLength = this.mayorList.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
  }
  applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  update(id:number){
    this.edit.emit(id);
  }
  remove(id:number){
    this.delete.emit(id);
  }

}
