import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DrinkModel } from 'src/app/main-page/models/drinks.model';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CocktailItemComponent {
  /**
   * Cocktail item
   */
  @Input()
  cocktailItem: DrinkModel;

  /**
   * Ingredients accordion panel item title
   */
  ingredientsTitle: string = 'Ingredients';

  /**
   * Instructions accordion panel item title
   */
  instructionsTitle: string = 'Instructions';

  /**
   * Get description state label
   * @param item
   */
  getDescription(item: string): string {
    return item.length ? 'Not empty' : 'Empty';
  }

  /**
   * Get description state label
   * @param item
   */
  getIngredients(item: DrinkModel): string {
    return item.strIngredient1 +
      this.getEndLineSign(item.strIngredient2) +
      this.getEndLineSign(item.strIngredient3) +
      this.getEndLineSign(item.strIngredient4) +
      this.getEndLineSign(item.strIngredient5) +
      this.getEndLineSign(item.strIngredient6) +
      this.getEndLineSign(item.strIngredient7) +
      this.getEndLineSign(item.strIngredient8) +
      this.getEndLineSign(item.strIngredient9) +
      this.getEndLineSign(item.strIngredient10) + '.';
  }

  /**
   * Get description state label
   * @param item
   */
  getInstructions(item: DrinkModel): string {
    return item.strInstructions;
  }

  /**
   * Get comma and next ingredient in case if ingredient exists
   * @param parameter 
   */
  private getEndLineSign(parameter: string): string {
    return parameter && parameter.length ? `, ${parameter}` : '';
  }
}
