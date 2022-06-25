import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, debounceTime } from 'rxjs';
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
   * Constructor
   * @param apiService
   */
  constructor(private apiService: ApiService) { }

  /**
   * Constructor
   * @param name
   * @returns array of founded drinks
   */
  onSearchDrink(name: Event): any {
    return this.apiService.searchCocktails(name)
      .pipe(debounceTime(200))
      .subscribe(res => console.log(res));
  }
}
