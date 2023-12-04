import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizagemEInformaticaComponent } from './aprendizagem-e-informatica.component';

describe('AprendizagemEInformaticaComponent', () => {
  let component: AprendizagemEInformaticaComponent;
  let fixture: ComponentFixture<AprendizagemEInformaticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprendizagemEInformaticaComponent]
    });
    fixture = TestBed.createComponent(AprendizagemEInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
