import { TestBed } from '@angular/core/testing';

import { CharacterDetailResolverService } from './character-detail-resolver.service';

describe('CharacterDetailResolverService', () => {
  let service: CharacterDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
