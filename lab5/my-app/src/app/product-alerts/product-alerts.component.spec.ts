import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

describe('ProductAlertsComponent', () => {
  let component: ProductAlertsComponent;
  let fixture: ComponentFixture<ProductAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
