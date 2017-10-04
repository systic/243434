import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationProposalComponent } from './quotation-proposal.component';

describe('QuotationProposalComponent', () => {
  let component: QuotationProposalComponent;
  let fixture: ComponentFixture<QuotationProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
