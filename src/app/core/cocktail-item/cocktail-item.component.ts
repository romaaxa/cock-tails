import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.scss']
})
export class CocktailItemComponent {
  /**
   * Cocktail item
   */
  @Input()
  cocktailItem: any;
}
