import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAliveCharacterDialogComponent } from './not-alive-character-dialog.component';

describe('NotAliveCharacterDialogComponent', () => {
  let component: NotAliveCharacterDialogComponent;
  let fixture: ComponentFixture<NotAliveCharacterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAliveCharacterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAliveCharacterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
