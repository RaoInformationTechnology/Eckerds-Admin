import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailTransferComponent } from './show-detail-transfer.component';

describe('ShowDetailTransferComponent', () => {
  let component: ShowDetailTransferComponent;
  let fixture: ComponentFixture<ShowDetailTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
