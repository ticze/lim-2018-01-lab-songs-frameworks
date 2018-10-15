import { TestBed } from '@angular/core/testing';

import { TopServService } from './top-serv.service';

describe('TopServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopServService = TestBed.get(TopServService);
    expect(service).toBeTruthy();
  });
});
