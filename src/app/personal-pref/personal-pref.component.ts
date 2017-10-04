import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personal-pref',
  templateUrl: './personal-pref.component.html',
  styleUrls: ['./personal-pref.component.scss']
})

export class PersonalPrefComponent implements OnInit {
  state: any;
  db: any;
  lookup: any;
  pref1: any;
  pref2: any;
  pref3: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.state= {};
    this.db = {
      pref1: { }
    };
    this.pref1 = {};
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
   _this.pref1 = data.pref1;
   _this.pref2 = data.pref2;
   _this.pref3 = data.pref3;
    _this.state.dataLoaded = true;
  }

  // lookupUpdate
  lookupUpdate(data, _this) {
    const ids= ["date", "custType", "isNew", "make", "modelYear", "carModel", "isAllModel", "verhicleUsage", 
    "plans", "isAllPlans", "planDetails", "category" , "isFixedRate", "withResource", "isFleet", "customerIndetifier",
    "subProgramIdentifier", "maritalStatus", "isSpouseOtherApplicant", "nationality", "subCustomer", "birthState",
    "birthCountry", "yesNo","residenceType", "state", "town"];
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
}


