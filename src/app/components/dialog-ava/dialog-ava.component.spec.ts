import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvaComponent } from './dialog-ava.component';

describe('DialogAvaComponent', () => {
  let component: DialogAvaComponent;
  let fixture: ComponentFixture<DialogAvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAvaComponent]
    });
    fixture = TestBed.createComponent(DialogAvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
