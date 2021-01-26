import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfiniteListComponent } from './character-infinite-list.component';

describe('CharacterInfiniteListComponent', () => {
  let component: CharacterInfiniteListComponent;
  let fixture: ComponentFixture<CharacterInfiniteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfiniteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfiniteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
