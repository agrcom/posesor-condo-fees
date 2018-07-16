import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastTextComponent } from './fast-text.component';

describe('FastTextComponent', () => {
  let component: FastTextComponent;
  let fixture: ComponentFixture<FastTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
