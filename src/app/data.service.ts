import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/**
 * DataService
 */
 @Injectable()
 export class DataService {

   constructor(private http: Http) {}

  /**
     * Data fetching using service
     */
  fetch(apiURL: string): Observable<string[]> {
    const fetchFn$ = this.http.get(apiURL)
    .map(res => {
      return res.json();
    });
    return fetchFn$;
  }
}

