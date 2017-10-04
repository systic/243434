import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPrefComponent } from './personal-pref.component';

describe('PersonalPrefComponent', () => {
  let component: PersonalPrefComponent;
  let fixture: ComponentFixture<PersonalPrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
