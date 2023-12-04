import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanAnimationComponent } from './span-animation.component';

describe('SpanAnimationComponent', () => {
  let component: SpanAnimationComponent;
  let fixture: ComponentFixture<SpanAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpanAnimationComponent]
    });
    fixture = TestBed.createComponent(SpanAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
