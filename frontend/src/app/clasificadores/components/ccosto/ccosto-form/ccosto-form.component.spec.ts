import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcostoFormComponent } from './ccosto-form.component';

describe('CcostoFormComponent', () => {
  let component: CcostoFormComponent;
  let fixture: ComponentFixture<CcostoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcostoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcostoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
