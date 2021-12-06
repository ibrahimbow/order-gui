import { Customer } from './customer-model/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customerUrl = 'http://localhost:9000//customers';  // URL to web api


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private _router: Router) {  }



  getCustomers(): Observable<Customer[]> {
    // const heroes = of(ITEMS);
    // this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Customer[]>(this.customerUrl)
      .pipe(
        catchError(this.handleError<Customer[]>('getCustomers', []))
      );

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
