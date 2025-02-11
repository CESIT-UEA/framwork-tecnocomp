import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDownloadPwaComponent } from './botao-download-pwa.component';

describe('BotaoDownloadPwaComponent', () => {
  let component: BotaoDownloadPwaComponent;
  let fixture: ComponentFixture<BotaoDownloadPwaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoDownloadPwaComponent]
    });
    fixture = TestBed.createComponent(BotaoDownloadPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
