import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  state: any;
  contact: any;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.state= {};
    this.contact = {};

    this.getData('./api/contact.json', this.onDataReceived);
  }

  // updateInputValue
  updateInputValue(e, item) {
    item.amount = e.target.value;
  }

  // onDataReceived
  onDataReceived(data, _this) {
    _this.contact = data.contact;
    _this.state.dataLoaded = true;
  }


  //showPreApprovalModal
  showSentModal(isTrue){
    this.state.isSentModal = isTrue;
  }

  // get data from service
  getData(url, callback) {
    this.dataService.fetch(url)
      .subscribe(newData => {
        callback(newData, this);
      });
  }
}
