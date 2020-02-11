import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealComposerComponent } from './deal-composer.component';

describe('DealComposerComponent', () => {
  let component: DealComposerComponent;
  let fixture: ComponentFixture<DealComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
