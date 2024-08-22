import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoForumComponent } from './topico-forum.component';

describe('TopicoForumComponent', () => {
  let component: TopicoForumComponent;
  let fixture: ComponentFixture<TopicoForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicoForumComponent]
    });
    fixture = TestBed.createComponent(TopicoForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
