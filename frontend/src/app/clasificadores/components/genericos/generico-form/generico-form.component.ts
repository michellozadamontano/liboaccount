import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Generico } from 'src/app/clasificadores/models/generico.interface';

@Component({
  selector: 'app-generico-form',
  templateUrl: './generico-form.component.html',
  styleUrls: ['./generico-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericoFormComponent implements OnInit, OnChanges {
  
  @Output() save = new EventEmitter<Generico>();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges()
  {

  }

}
