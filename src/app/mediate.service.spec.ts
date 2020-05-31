import { TestBed } from '@angular/core/testing';

import { MediateService } from './mediate.service';

describe('MediateService', () => {
  let service: MediateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
