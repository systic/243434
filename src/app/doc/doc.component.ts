import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})

export class DocComponent implements OnInit {
  state: any;
  db: any;
  quote: any;
  lookup: any;
  doc: any;
  contractPrinting: any;
  docReq: any;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.state= {};
    this.db = {
      doc: { }
    };
    this.docReq = {};
    this.contractPrinting = {};
    this.doc = {};
    this.lookup = {};



    this.getData('./api/lookup.json', this.lookupUpdate);
    this.getData('./api/quotations.json', this.onDataReceived);
  }

  // updateInputValue
  updateInputValue(e, item) {
    item.amount = e.target.value;
  }

  // onDataReceived
  onDataReceived(data, _this) {
    _this.docReq = data.docReq ;
    _this.contractPrinting = data.contractPrinting ;
    _this.doc = data.doc ;
    _this.state.dataLoaded = true;
    _this.initDatepicker();
  }

  //init date
  initDatepicker() {
    window.setTimeout(function(){
      $('.datepicker').datepicker();
    })
  }

  // lookupUpdate
  lookupUpdate(data, _this) {
    const ids= ["date", "custType", "isNew", "make", "modelYear", "carModel", "isAllModel", "verhicleUsage", 
    "plans", "isAllPlans", "planDetails", "category" , "isFixedRate", "withResource", "isFleet", "customerIndetifier",
    "subProgramIdentifier", "maritalStatus", "isSpouseOtherApplicant", "nationality", "subCustomer", "birthState",
    "birthCountry", "yesNo", "accType", "bank"];
    _this.lookup.carType = data.carType;
    _this.lookup.carManufacturer = data.carManufacturer;
    _this.lookup.carModel = data.carModel;
    _this.lookup.carVarient = data.carVarient;
    _this.state.lookupLoaded = true;

    ids.map(item=>{
      _this.lookup[item]=data[item];
    })
  }

  //showPreApprovalModal
  showPreApprovalModal(isTrue){
    this.state.isPreApprovalModal = isTrue;
  }

  //warningModal
  showWarningModal(isTrue){
    this.state.isWranModal = isTrue;
  }
  //isSubmitModal
  showSubmitModal(isTrue){
    this.state.isSubmitModal = isTrue;
  }


  // get data from service
  getData(url, callback) {
    this.dataService.fetch(url)
      .subscribe(newData => {
        callback(newData, this);
      });
  }

  //isSetp1FormIncomplete
  isSetp1FormIncomplete() {
    const fields = ["carManufacturer", "carModel", "carVarient"];
    let isValid = true;
    fields.map(item => {
      if(!this.quote.vSel1[item]){
        isValid = false;
      }
    })
    return isValid;
  }

  // saveUpdates
  saveUpdates(){
    this.state.hasError = true;
  }
}
