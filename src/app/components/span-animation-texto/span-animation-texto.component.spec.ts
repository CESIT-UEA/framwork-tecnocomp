import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanAnimationTextoComponent } from './span-animation-texto.component';

describe('SpanAnimationTextoComponent', () => {
  let component: SpanAnimationTextoComponent;
  let fixture: ComponentFixture<SpanAnimationTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpanAnimationTextoComponent]
    });
    fixture = TestBed.createComponent(SpanAnimationTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
