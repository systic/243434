import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-applicant-nav',
  templateUrl: './applicant-nav.component.html',
  styleUrls: ['./applicant-nav.component.scss']
})
export class ApplicantNavComponent implements OnInit {
  @Input() activeNav: any;
  @Input() profileDetailsError: any;
  
  constructor() { }

  ngOnInit() {
  }

}
