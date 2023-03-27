import { TestBed } from '@angular/core/testing';

import { ServiciosFormularioService } from './servicios-formulario.service';

describe('ServiciosFormularioService', () => {
  let service: ServiciosFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
