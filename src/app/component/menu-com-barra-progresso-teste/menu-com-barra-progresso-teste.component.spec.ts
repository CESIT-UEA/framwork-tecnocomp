import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComBarraProgressoTesteComponent } from './menu-com-barra-progresso-teste.component';

describe('MenuComBarraProgressoTesteComponent', () => {
  let component: MenuComBarraProgressoTesteComponent;
  let fixture: ComponentFixture<MenuComBarraProgressoTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComBarraProgressoTesteComponent]
    });
    fixture = TestBed.createComponent(MenuComBarraProgressoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
