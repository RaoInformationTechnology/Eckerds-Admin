import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillPrescriptionComponent } from './refill-prescription.component';

describe('RefillPrescriptionComponent', () => {
  let component: RefillPrescriptionComponent;
  let fixture: ComponentFixture<RefillPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
