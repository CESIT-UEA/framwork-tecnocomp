import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeUnidadeComponent } from './atividade-unidade.component';

describe('AtividadeUnidadeComponent', () => {
  let component: AtividadeUnidadeComponent;
  let fixture: ComponentFixture<AtividadeUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtividadeUnidadeComponent]
    });
    fixture = TestBed.createComponent(AtividadeUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
