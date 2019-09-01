import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraternidadComponent } from './fraternidad.component';

describe('FraternidadComponent', () => {
  let component: FraternidadComponent;
  let fixture: ComponentFixture<FraternidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraternidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraternidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
