import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementItemComponent } from './settlement-item.component';

describe('SettlementItemComponent', () => {
  let component: SettlementItemComponent;
  let fixture: ComponentFixture<SettlementItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
