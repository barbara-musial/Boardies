import { TestBed } from '@angular/core/testing';

import { InstagramDataService } from './instagram-data.service';

describe('InstagramDataService', () => {
  let service: InstagramDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
