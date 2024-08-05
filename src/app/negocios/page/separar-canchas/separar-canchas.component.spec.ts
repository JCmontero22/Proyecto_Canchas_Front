import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepararCanchasComponent } from './separar-canchas.component';

describe('SepararCanchasComponent', () => {
  let component: SepararCanchasComponent;
  let fixture: ComponentFixture<SepararCanchasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SepararCanchasComponent]
    });
    fixture = TestBed.createComponent(SepararCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
