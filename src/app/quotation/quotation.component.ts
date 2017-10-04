import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {
  state: any;
  db: any;
  quote: any;
  lookup: any;
  activeStep: any;
  stepId: any;

  constructor(public dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.state= {};
    this.db = {
      quote: { }
    };
    this.quote = {};
    this.lookup = {};

    this.route.params.subscribe(params => {
     this.stepId = params['stepId']; 
    });

    this.activeStep = (!!this.stepId && this.stepId==='2')?2:1;


    this.getData('./api/lookup.json', this.lookupUpdate);
    this.getData('./api/quotations.json', this.onDataReceived);
  }

  // onDataReceived
  onDataReceived(data, _this) {
    _this.quote = data.quote;
    _this.state.dataLoaded = true;
  }

  // lookupUpdate
  lookupUpdate(data, _this) {
    _this.lookup.carType = data.carType;
    _this.lookup.carManufacturer = data.carManufacturer;
    _this.lookup.carModel = data.carModel;
    _this.lookup.carVarient = data.carVarient;
    _this.state.lookupLoaded = true;
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

  // nextStep/prevStep
  goToStep(stepNo){
    const maxSteps = 3;
    if(stepNo>0 && stepNo <= maxSteps){
      this.activeStep = stepNo;
    }
  }
}
