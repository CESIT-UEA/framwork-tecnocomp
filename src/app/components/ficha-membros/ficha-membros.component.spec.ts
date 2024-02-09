import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaMembrosComponent } from './ficha-membros.component';

describe('FichaMembrosComponent', () => {
  let component: FichaMembrosComponent;
  let fixture: ComponentFixture<FichaMembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaMembrosComponent]
    });
    fixture = TestBed.createComponent(FichaMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
