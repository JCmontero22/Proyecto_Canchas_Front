import { TestBed } from '@angular/core/testing';

import { InicioSerivcesService } from './inicio-serivces.service';

describe('InicioSerivcesService', () => {
  let service: InicioSerivcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioSerivcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
