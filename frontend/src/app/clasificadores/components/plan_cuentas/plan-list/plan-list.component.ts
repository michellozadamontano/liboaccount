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
import { CuentaPlanList } from 'src/app/clasificadores/models/cuenta_plan_list.interface';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanListComponent implements OnInit, OnChanges {

  @Input() planList: CuentaPlanList[];

  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  public displayedColumns = ['Codigo','Nombre','Tipo','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {

    this.dataSource = new MatTableDataSource(this.planList);
    this.resultsLength = this.planList.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
