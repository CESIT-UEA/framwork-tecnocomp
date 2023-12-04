import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUnidadeComponent } from './header-unidade.component';

describe('HeaderUnidadeComponent', () => {
  let component: HeaderUnidadeComponent;
  let fixture: ComponentFixture<HeaderUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUnidadeComponent]
    });
    fixture = TestBed.createComponent(HeaderUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
