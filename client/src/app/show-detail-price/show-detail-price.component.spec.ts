import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailPriceComponent } from './show-detail-price.component';

describe('ShowDetailPriceComponent', () => {
  let component: ShowDetailPriceComponent;
  let fixture: ComponentFixture<ShowDetailPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
