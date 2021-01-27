import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSimpleListComponent } from './character-simple-list.component';

describe('CharacterSimpleListComponent', () => {
  let component: CharacterSimpleListComponent;
  let fixture: ComponentFixture<CharacterSimpleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSimpleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
