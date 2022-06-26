import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { DrinkModel } from '../models/drinks.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent {

  /**
   * Default placeholder for input
   */
  readonly inputPlaceholder: string = 'Search';

  /**
   * Drink name to search
   */
  drinkName: Event;

  /**
   * Debounce state
   */
  debounce: any;

  /**
   * Search result
   */
  searchResult: any;

  /**
   * Constructor
   * @param apiService
   */
  constructor(private apiService: ApiService) { }

  /**
   * Constructor
   * @param name
   * @returns array of founded drinks
   */
  onSearchDrink(name: Event): void {
    clearTimeout(this.debounce)
    this.debounce = setTimeout(() => {
      this.apiService.searchCocktails(name)
        .subscribe(res => {
          console.log(res);
          return this.searchResult = res
        }
        );
    }, 500);
  }
}
