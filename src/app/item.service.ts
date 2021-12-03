import { ViewCustomerDetailsComponent } from './customer-control-panel/view-customer-details/view-customer-details.component';
import { Item } from './item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ItemService {


  private itemsUrl = 'http://localhost:9000/items';  // URL to web api

  private viewDetialsItemUrl = 'http://localhost:4200/viewItemDetails';



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private _router: Router) {



  }



  getItems(): Observable<Item[]> {
    // const heroes = of(ITEMS);
    // this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        catchError(this.handleError<Item[]>('getItems', []))
      );

  }

  addNewItem(item: Item) {
    return this.http.post(this.itemsUrl, item)
  }




  getItem(id: string){
    return this.http.get('http://localhost:9000/items?id='+ id);
  }


  findItemById(id: string): Observable<any> {
    return this.http
      .get(`${this.itemsUrl}/${id}`);
  }


  ngOnInit(): void {
  }


  /** PUT: update the hero on the server */
updateItem(item: Item): Observable<any> {
  return this.http.put(this.itemsUrl, item, this.httpOptions).pipe(
    tap(_ => console.log(`updated hero id=${item.id}`)),
    catchError(this.handleError<any>('updateHero'))
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
