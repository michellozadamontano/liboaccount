import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  EventEmitter,
  Output}                    from '@angular/core';
import { TcpShow } from 'src/app/clasificadores/models/tcp_show';

@Component({
  selector: 'app-tcp-show',
  templateUrl: './tcp-show.component.html',
  styleUrls: ['./tcp-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcpShowComponent implements OnInit {

  @Input() tcp: TcpShow;
  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
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
