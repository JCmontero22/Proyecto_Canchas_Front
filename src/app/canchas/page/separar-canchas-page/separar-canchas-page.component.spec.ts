import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepararCanchasPageComponent } from './separar-canchas-page.component';

describe('SepararCanchasPageComponent', () => {
  let component: SepararCanchasPageComponent;
  let fixture: ComponentFixture<SepararCanchasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SepararCanchasPageComponent]
    });
    fixture = TestBed.createComponent(SepararCanchasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
