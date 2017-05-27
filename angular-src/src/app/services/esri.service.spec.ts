import { TestBed, inject } from '@angular/core/testing';

import { EsriService } from './esri.service';

describe('EsriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriService]
    });
  });

  it('should ...', inject([EsriService], (service: EsriService) => {
    expect(service).toBeTruthy();
  }));
});
