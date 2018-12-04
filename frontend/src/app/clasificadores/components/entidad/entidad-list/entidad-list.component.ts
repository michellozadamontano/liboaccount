import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  Output,
  EventEmitter
}                                         from '@angular/core';
import { Entidad }                        from 'src/app/clasificadores/models/entidad.interface';
import { ProvinceAction } from 'src/app/clasificadores/store';

@Component({
  selector: 'app-entidad-list',
  templateUrl: './entidad-list.component.html',
  styleUrls: ['./entidad-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntidadListComponent implements OnInit {

  @Input() entidad  : Entidad;
  @Input() provincia: ProvinceAction[];
  @Output() edit    = new EventEmitter<Entidad>();

  constructor() { }

  ngOnInit() {
  }
  Edit()
  {
    this.edit.emit(this.entidad);
  }

}
