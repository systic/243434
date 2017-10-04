import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() list : any[];
  @Input() val: string;
  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() default: string;
  @Output() valChange: EventEmitter<string>;

  constructor() { 
    this.valChange = new EventEmitter<string>();
   }

  ngOnInit() {
    let options = { data: this.list,
      list: {
        maxNumberOfElements: 10,
        match: {
          enabled: true
        }
      } 
    };
    if(this.list.length > 0){
      $('.autocomplete-el .q').easyAutocomplete(options);
    }

  }

  onKeyUp(){
    let text = this.val;
    this.valChange.emit(text);

  }

}

