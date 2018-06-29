import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementNewItemComponent } from './settlement-new-item.component';

describe('SettlementNewItemComponent', () => {
  let component: SettlementNewItemComponent;
  let fixture: ComponentFixture<SettlementNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementNewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
