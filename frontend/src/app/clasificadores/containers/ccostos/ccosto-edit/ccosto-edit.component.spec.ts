import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcostoEditComponent } from './ccosto-edit.component';

describe('CcostoEditComponent', () => {
  let component: CcostoEditComponent;
  let fixture: ComponentFixture<CcostoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcostoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcostoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
