import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloConcluidoComponent } from './modulo-concluido.component';

describe('ModuloConcluidoComponent', () => {
  let component: ModuloConcluidoComponent;
  let fixture: ComponentFixture<ModuloConcluidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloConcluidoComponent]
    });
    fixture = TestBed.createComponent(ModuloConcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
