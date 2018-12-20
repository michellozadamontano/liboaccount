import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCostoFormComponent } from './centro-costo-form.component';

describe('CentroCostoFormComponent', () => {
  let component: CentroCostoFormComponent;
  let fixture: ComponentFixture<CentroCostoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroCostoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroCostoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
