import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationApplicantComponent } from './quotation-applicant.component';

describe('QuotationApplicantComponent', () => {
  let component: QuotationApplicantComponent;
  let fixture: ComponentFixture<QuotationApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
