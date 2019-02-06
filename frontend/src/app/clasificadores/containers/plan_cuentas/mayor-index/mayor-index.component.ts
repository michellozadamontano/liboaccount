import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy 
}                                 from '@angular/core';

import { Observable, from }       from 'rxjs';

import { Router }                 from '@angular/router';
import { CuentaMayor }            from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { CuentaMayorService }     from 'src/app/services';

@Component({
  selector: 'app-mayor-index',
  templateUrl: './mayor-index.component.html',
  styleUrls: ['./mayor-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MayorIndexComponent implements OnInit {

  mayorList$: Observable<CuentaMayor[]>;

  constructor(     
    private router: Router,
    private mayorService: CuentaMayorService
  ) { }

  ngOnInit() {   
    this.mayorList$ = this.mayorService.getCuentaMayor();    
  }
  add()
  {
    this.router.navigate(['clasificadores/mayor_new']);
  }
  update(id:number)
  {
    this.router.navigate(['clasificadores/mayor_edit',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.mayorService.deleteCuentaMayor(id).subscribe(resp =>{       
        
      }); 
    }
    
  }

}
