import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() list : any[];
  @Input() val: any;
  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() default: string;
  @Input() childClass: any;
  @Output() valChange: EventEmitter<string>;

  constructor() { 
    this.valChange = new EventEmitter<string>();
   }

  ngOnInit() {
    this.val = !!this.default?this.default:this.val;
  }

  toggle(isOpen){
    this.isOpen = !!this.isOpen?false:true;
  }
  // selectItem
  selectItem(item){
    this.val = item.value;
    this.valChange.emit(item.value);
    this.isOpen = false;
  }

}
