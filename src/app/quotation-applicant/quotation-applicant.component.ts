import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-quotation-applicant',
  templateUrl: './quotation-applicant.component.html',
  styleUrls: ['./quotation-applicant.component.scss']
})
export class QuotationApplicantComponent implements OnInit {
  qApplicant: any;
  state: any;
  db: any;
  lookup: any;


  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.state = {};
    this.db = {
      qApplicant: {}
    };
    this.qApplicant = {};
    this.lookup = {};

    this.getData('./api/lookup.json', this.lookupUpdate);
    this.getData('./api/quotations.json', this.onDataReceived);
  }

  // onDataReceived
  onDataReceived(data, _this) {
    _this.qApplicant = data.quotationApplicant;
    _this.state.dataLoaded = true;
  }

  // lookupUpdate
  lookupUpdate(data, _this) {
    _this.state.lookupLoaded = true;
  }

  // get data from service
  getData(url, callback) {
    this.dataService.fetch(url)
      .subscribe(newData => {
        callback(newData, this);
      });
  }
}
