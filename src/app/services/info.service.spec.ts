import { TestBed } from '@angular/core/testing';
import { infoArtis } from './info.service';

describe('infoArtis', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: infoArtis = TestBed.get(infoArtis);
    expect(service).toBeTruthy();
  });
});
