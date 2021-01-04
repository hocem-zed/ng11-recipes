import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../layout/recipes/recipe.service';
import {Recipe} from '../models/recipe.model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  DB_URL = 'https://ng-recipe-book-udemy-e6893-default-rtdb.firebaseio.com';
  recipesDbUrl = this.DB_URL + '/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  saveRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.recipesDbUrl, recipes)
      .subscribe(response => {
          console.log(response);
        }
      );
  }

  // tslint:disable-next-line:typedef
  fetchRecipes() {
    return this.http.get<Recipe[]>(this.recipesDbUrl)
      .pipe(
        map(recipes => {
          return recipes.map(
            recipe => {
              return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            }
          );
        }),
        tap(recipes =>
          this.recipeService.setRecipes(recipes)
        )
      );
  }


}
