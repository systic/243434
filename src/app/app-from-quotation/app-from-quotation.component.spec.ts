import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFromQuotationComponent } from './app-from-quotation.component';

describe('AppFromQuotationComponent', () => {
  let component: AppFromQuotationComponent;
  let fixture: ComponentFixture<AppFromQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFromQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFromQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
