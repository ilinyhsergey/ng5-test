import { TestBed, inject } from '@angular/core/testing';

import { StatusResolverService } from './status-resolver.service';

describe('StatusResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusResolverService]
    });
  });

  it('should be created', inject([StatusResolverService], (service: StatusResolverService) => {
    expect(service).toBeTruthy();
  }));
});
