import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutivismoComponent } from './construtivismo.component';

describe('ConstrutivismoComponent', () => {
  let component: ConstrutivismoComponent;
  let fixture: ComponentFixture<ConstrutivismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstrutivismoComponent]
    });
    fixture = TestBed.createComponent(ConstrutivismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
