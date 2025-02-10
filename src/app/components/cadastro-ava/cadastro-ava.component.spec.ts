import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAvaComponent } from './cadastro-ava.component';

describe('CadastroAvaComponent', () => {
  let component: CadastroAvaComponent;
  let fixture: ComponentFixture<CadastroAvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAvaComponent]
    });
    fixture = TestBed.createComponent(CadastroAvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
