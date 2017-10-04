// external modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';

// dev modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent} from './dashboard/dashboard.component';
import { MainHeadComponent } from './main-head/main-head.component';
import { HttpModule } from '@angular/http';
import { QuotationComponent } from './quotation/quotation.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ContactComponent } from './contact/contact.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SearchComponent } from './search/search.component';
import { QuotationModifyComponent } from './quotation-modify/quotation-modify.component';
import { QuotationProposalComponent } from './quotation-proposal/quotation-proposal.component';
import { QuotationApplicantComponent } from './quotation-applicant/quotation-applicant.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AppFromQuotationComponent } from './app-from-quotation/app-from-quotation.component';
import { ApplicantNavComponent } from './applicant-nav/applicant-nav.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { PersonalPrefComponent } from './personal-pref/personal-pref.component';
import { PepComponent } from './pep/pep.component';
import { DocComponent } from './doc/doc.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainHeadComponent,
    QuotationComponent,
    GetQuoteComponent,
    ViewApplicationComponent,
    ContactComponent,
    SelectComponent,
    AutocompleteComponent,
    SearchComponent,
    QuotationModifyComponent,
    QuotationProposalComponent,
    QuotationApplicantComponent,
    CarDetailsComponent,
    ProfileDetailsComponent,
    AddressDetailsComponent,
    AppFromQuotationComponent,
    ApplicantNavComponent,
    WorkDetailsComponent,
    PersonalPrefComponent,
    PepComponent,
    DocComponent,
    HistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
