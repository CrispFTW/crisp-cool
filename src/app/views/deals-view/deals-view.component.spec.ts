import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsViewComponent } from './deals-view.component';

describe('DealsViewComponent', () => {
  let component: DealsViewComponent;
  let fixture: ComponentFixture<DealsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
