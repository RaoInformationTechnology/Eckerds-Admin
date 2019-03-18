import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailRefillComponent } from './show-detail-refill.component';

describe('ShowDetailRefillComponent', () => {
  let component: ShowDetailRefillComponent;
  let fixture: ComponentFixture<ShowDetailRefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailRefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
