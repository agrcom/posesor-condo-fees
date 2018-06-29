import { TestBed, inject } from '@angular/core/testing';

import { SettlementServiceService } from './settlement-service.service';

describe('SettlementServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettlementServiceService]
    });
  });

  it('should be created', inject([SettlementServiceService], (service: SettlementServiceService) => {
    expect(service).toBeTruthy();
  }));
});
