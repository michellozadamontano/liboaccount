import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges, 
}                                   from '@angular/core';

import { 
  MatTableDataSource, 
  MatDialog } 		                  from '@angular/material';
import { MatPaginator, MatSort }    from '@angular/material';

import { CuentaMayor }              from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { CuentaTipo }               from 'src/app/clasificadores/models/cuenta_tipo.interface';
import { CuentaPlan }               from 'src/app/clasificadores/models/cuenta_plan.interface';



@Component({
  selector: 'app-plan-tree',
  templateUrl: './plan-tree.component.html',
  styleUrls: ['./plan-tree.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanTreeComponent implements OnInit, OnChanges {

  @Input() mayorList  : CuentaMayor[];
  @Input() tipoList   : CuentaTipo[];  
  @Input() planList   : CuentaPlan[]; 

  @Output() getTipo     = new EventEmitter<number>();
  @Output() getPlan     = new EventEmitter<number>();

  @Output() updateMayor = new EventEmitter<number>();
  @Output() updateTipo  = new EventEmitter<number>();
  @Output() updatePlan  = new EventEmitter<number>();
  @Output() deleteMayor = new EventEmitter<number>();
  @Output() deleteTipo  = new EventEmitter<number>();
  @Output() deletePlan  = new EventEmitter<number>();


  public displayedColumns           = ['Codigo','Nombre','Actions'];
  resultsLength                     = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginatorT: MatPaginator;
  @ViewChild(MatPaginator) paginatorP: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  public displayTipoColumns         = ['Codigo','Nombre','Deudora','Actions'];
  lengthTipo                        = 0;
  public tipoDatasource             = new MatTableDataSource<any>();

  public displayPlanColumns         = ['Codigo','Nombre','Actions'];
  lengthPlan                        = 0;
  public planDatasource             = new MatTableDataSource<any>();

  constructor() {
    
  }
  

  ngOnInit() {
   
    
  }
  ngOnChanges(){

    this.dataSource               = new MatTableDataSource(this.mayorList);
    this.resultsLength            = this.mayorList.length;
    this.dataSource.paginator     = this.paginator;
    this.dataSource.sort          = this.sort;

    this.tipoDatasource           = new MatTableDataSource(this.tipoList);
    this.lengthTipo               = this.tipoList ? this.tipoList.length : 0 ;
    this.tipoDatasource.paginator = this.paginatorT;
    this.tipoDatasource.sort      = this.sort; 
    
    this.planDatasource           = new MatTableDataSource(this.planList);
    this.lengthPlan               = this.planList ? this.planList.length : 0 ;
    this.planDatasource.paginator = this.paginatorP;
    this.planDatasource.sort      = this.sort;
    
    console.log(this.planList);
    
   
  }
  tipoEvent(id:number){
    this.getTipo.emit(id);        
  }
  planEvent(id:number){
    this.getPlan.emit(id);
  }
  editMayor(id:number)
  {
    this.updateMayor.emit(id);
  }
  editTipo(id:number){
    this.updateTipo.emit(id);
  }
  editPlan(id:number){
    this.updatePlan.emit(id);
  }
  removeMayor(id:number){
    this.deleteMayor.emit(id);
  }
  removeTipo(id:number){
    this.deleteTipo.emit(id);
  }
  removePlan(id:number){
    this.deletePlan.emit(id);
  }
 
}
