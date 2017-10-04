import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  state: any;
  history: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.state= {};
    this.history = {};

    this.getData('./api/quotations.json', this.onDataReceived);
  }

  // updateInputValue
  updateInputValue(e, item) {
    item.amount = e.target.value;
  }

  // onDataReceived
  onDataReceived(data, _this) {
    _this.history = data.history;
    _this.state.dataLoaded = true;
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

