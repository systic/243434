import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationModifyComponent } from './quotation-modify.component';

describe('QuotationModifyComponent', () => {
  let component: QuotationModifyComponent;
  let fixture: ComponentFixture<QuotationModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
