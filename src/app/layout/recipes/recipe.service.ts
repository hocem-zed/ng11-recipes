import {Recipe} from '../../models/recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Hamburger',
      'Nice big fat hamburger',
      'https://cdn.radiofrance.fr/s3/cruiser-production/2019/02/3e27345f-9e1e-45bb-9e5f-906f0abb2870/1200x680_gettyimages-922684138.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Cheese', 2),
        new Ingredient('Tomatoes', 1),
        new Ingredient('French fries', 20)
      ]
    ),
    new Recipe(
      2,
      'Pizza',
      'What else you need to say!',
      'https://img.cuisineaz.com/660x660/2013-12-20/i95731-pizza-royale.jpg',
      [
        new Ingredient('pasta', 1),
        new Ingredient('cheese', 4),
        new Ingredient('onions', 1),
        new Ingredient('tomato', 2),
        new Ingredient('black olive', 10)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService, private router: Router) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find(item => item.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe): void {
    const index = this.recipes.findIndex(x => x.id === id);
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number): void {
    console.log('Id to delete:', id);
    this.recipes.splice((id - 1), 1);
    this.recipesChanged.next(this.recipes.slice());
  }


}
