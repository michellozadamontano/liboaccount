import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcostoNewComponent } from './ccosto-new.component';

describe('CcostoNewComponent', () => {
  let component: CcostoNewComponent;
  let fixture: ComponentFixture<CcostoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcostoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcostoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
