import { TestBed, inject } from '@angular/core/testing';

import { CeldaService } from './celda.service';

describe('CeldaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CeldaService]
    });
  });

  it('should be created', inject([CeldaService], (service: CeldaService) => {
    expect(service).toBeTruthy();
  }));
});
