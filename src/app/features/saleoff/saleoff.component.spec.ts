import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleoffComponent } from './saleoff.component';

describe('SaleoffComponent', () => {
  let component: SaleoffComponent;
  let fixture: ComponentFixture<SaleoffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleoffComponent]
    });
    fixture = TestBed.createComponent(SaleoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
