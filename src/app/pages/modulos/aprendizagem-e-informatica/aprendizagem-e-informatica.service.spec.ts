import { TestBed } from '@angular/core/testing';

import { AprendizagemEInformaticaService } from './aprendizagem-e-informatica.service';

describe('AprendizagemEInformaticaService', () => {
  let service: AprendizagemEInformaticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprendizagemEInformaticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
