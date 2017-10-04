// AppComponent
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  someProperty: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    //expan collapse init
    $('body').on('click', '.expandable-sn .toggle-handle.arrow', function(){
      const p = $(this).closest('.expandable-sn');
      p.hasClass('collapsed') ? p.removeClass('collapsed') : p.addClass('collapsed');
    })
  }
}



