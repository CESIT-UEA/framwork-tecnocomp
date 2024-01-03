import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAtividadeComponent } from './header-atividade.component';

describe('HeaderAtividadeComponent', () => {
  let component: HeaderAtividadeComponent;
  let fixture: ComponentFixture<HeaderAtividadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAtividadeComponent]
    });
    fixture = TestBed.createComponent(HeaderAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
