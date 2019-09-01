import { TestBed } from '@angular/core/testing';

import { FraternidadService } from './fraternidad.service';

describe('FraternidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FraternidadService = TestBed.get(FraternidadService);
    expect(service).toBeTruthy();
  });
});
