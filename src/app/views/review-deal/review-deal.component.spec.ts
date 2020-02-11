import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDealComponent } from './review-deal.component';

describe('ReviewDealComponent', () => {
  let component: ReviewDealComponent;
  let fixture: ComponentFixture<ReviewDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
