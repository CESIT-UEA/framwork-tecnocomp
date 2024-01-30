import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeUnidadeBancoComponent } from './atividade-unidade-banco.component';

describe('AtividadeUnidadeBancoComponent', () => {
  let component: AtividadeUnidadeBancoComponent;
  let fixture: ComponentFixture<AtividadeUnidadeBancoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtividadeUnidadeBancoComponent]
    });
    fixture = TestBed.createComponent(AtividadeUnidadeBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
