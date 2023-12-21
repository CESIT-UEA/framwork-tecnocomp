import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioconstrutivismoComponent } from './socioconstrutivismo.component';

describe('SocioconstrutivismoComponent', () => {
  let component: SocioconstrutivismoComponent;
  let fixture: ComponentFixture<SocioconstrutivismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioconstrutivismoComponent]
    });
    fixture = TestBed.createComponent(SocioconstrutivismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
