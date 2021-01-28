import { TestBed } from '@angular/core/testing';

import { CharacterAliveGuardService } from './character-alive-guard.service';

describe('CharacterAliveGuardService', () => {
  let service: CharacterAliveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterAliveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
