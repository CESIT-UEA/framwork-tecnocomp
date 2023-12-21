import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorismoComponent } from './behaviorismo.component';

describe('BehaviorismoComponent', () => {
  let component: BehaviorismoComponent;
  let fixture: ComponentFixture<BehaviorismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorismoComponent]
    });
    fixture = TestBed.createComponent(BehaviorismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
