import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucionismoComponent } from './construcionismo.component';

describe('ConstrucionismoComponent', () => {
  let component: ConstrucionismoComponent;
  let fixture: ComponentFixture<ConstrucionismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstrucionismoComponent]
    });
    fixture = TestBed.createComponent(ConstrucionismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
