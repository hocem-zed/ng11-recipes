import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../models/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipe = this.recipeService.getRecipe(+params.id);
        }
      );
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
