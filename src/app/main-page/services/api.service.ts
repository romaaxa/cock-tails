import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * Constructor
   * @param httpClient
   */
  constructor(private httpClient: HttpClient) { }
  
  /**
   * Method to search cocktails
   * @param name
   */
  searchCocktails(name: Event): Observable<Object> {
    return this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  }
}
