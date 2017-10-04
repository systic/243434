/*
 * application routing
 */

import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuotationComponent } from './quotation/quotation.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { QuotationModifyComponent } from './quotation-modify/quotation-modify.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ContactComponent } from './contact/contact.component';
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

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'quotation', component: QuotationComponent, pathMatch: 'full' },
  { path: 'quotation/:stepId', component: QuotationComponent, pathMatch: 'full' },
  { path: 'quotationApplicant', 
      component: QuotationApplicantComponent,
      children: [
        { path: '', redirectTo: '/quotationApplicant/general', pathMatch: 'full'},
        { path: 'general', component: CarDetailsComponent, pathMatch: 'full'},
        { path: 'profileDetails', component: ProfileDetailsComponent, pathMatch: 'full'},
        { path: 'addressDetails', component: AddressDetailsComponent, pathMatch: 'full'},
        { path: 'appFromQuotation', component: AppFromQuotationComponent, pathMatch: 'full'},

        { path: 'applicantNav', component: ApplicantNavComponent, pathMatch: 'full'},
        { path: 'workDetails', component: WorkDetailsComponent, pathMatch: 'full'},
        { path: 'personalPref', component: PersonalPrefComponent, pathMatch: 'full'},
        { path: 'pep', component: PepComponent, pathMatch: 'full'},
        { path: 'doc', component: DocComponent, pathMatch: 'full'},
        { path: 'history', component: HistoryComponent, pathMatch: 'full'},
      ]

  },
  { path: 'getQuote', component: GetQuoteComponent, pathMatch: 'full' },
  { path: 'quotation-modify', component: QuotationModifyComponent, pathMatch: 'full' },
  { path: 'viewApplication',
      component: ViewApplicationComponent,
      children: [
        { path: '', redirectTo: '/viewApplication/general', pathMatch: 'full'},
        { path: 'general', component: CarDetailsComponent, pathMatch: 'full'},
        { path: 'profileDetails', component: ProfileDetailsComponent, pathMatch: 'full'},
        { path: 'addressDetails', component: AddressDetailsComponent, pathMatch: 'full'},
        { path: 'appFromQuotation', component: AppFromQuotationComponent, pathMatch: 'full'},

        { path: 'applicantNav', component: ApplicantNavComponent, pathMatch: 'full'},
        { path: 'workDetails', component: WorkDetailsComponent, pathMatch: 'full'},
        { path: 'personalPref', component: PersonalPrefComponent, pathMatch: 'full'},
        { path: 'pep', component: PepComponent, pathMatch: 'full'},
        { path: 'doc', component: DocComponent, pathMatch: 'full'},
        { path: 'history', component: HistoryComponent, pathMatch: 'full'},
      ]
  },

  { path: 'contact', component: ContactComponent, pathMatch: 'full' }
];

/**
 * app module
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
