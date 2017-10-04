import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-head',
  templateUrl: 'main-head.component.html',
  styleUrls: ['./main-head.component.scss']
})
export class MainHeadComponent implements OnInit {
  db: object;
  userMenuOpen: any;
  @Input() activenav: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.db = {
      logger: {}
    };

    const dataSvc = this.dataService
    .fetch('./api/db.json')
    .subscribe(newData => {
      this.db = newData;
      this.db = this.db['details'];
    });
  }

  // toggleMenu
  toggleMenu(){
    this.userMenuOpen = !!this.userMenuOpen?false:true;
  }
}
