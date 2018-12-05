import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  ViewChild,
  OnChanges
}                                   from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource}      from '@angular/material';
import { PlantillaComp }            from 'src/app/clasificadores/models/plantilla_comp.interface';

@Component({
  selector: 'app-plantilla-list',
  templateUrl: './plantilla-list.component.html',
  styleUrls: ['./plantilla-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantillaListComponent implements OnInit, OnChanges {

  @Input() plantillas : PlantillaComp[];

  public displayedColumns           = ['Tipo Movimiento','Plantilla','Actions'];
  resultsLength                     = 0;  
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.plantillas);
    this.resultsLength = this.plantillas.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnChanges()
  {
    this.dataSource = new MatTableDataSource(this.plantillas);
    this.resultsLength = this.plantillas.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  update(id:number)
  {

  }

}
