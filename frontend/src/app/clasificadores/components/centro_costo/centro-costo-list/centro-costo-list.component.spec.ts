import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCostoListComponent } from './centro-costo-list.component';

describe('CentroCostoListComponent', () => {
  let component: CentroCostoListComponent;
  let fixture: ComponentFixture<CentroCostoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroCostoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroCostoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
