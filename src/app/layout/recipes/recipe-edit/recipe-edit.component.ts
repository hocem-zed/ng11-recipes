import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../../../models/recipe.model';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private  recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.editMode = params.id != null;
          this.initForm();
        }
      );
  }

  onSubmit(): void {
    console.log(this.recipeForm);
    const newRecipe = new Recipe(
      null,
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients);

    if (this.editMode) {
      newRecipe.id = this.id;
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      const lastIndex = this.recipeService.getRecipes().length;
      newRecipe.id = lastIndex + 1;
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  get controls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient(): void {
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(i: number): void {
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(i);
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesc = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      ingredients: recipeIngredients
    });
  }


  onCancel(): void {
    this.recipeForm.reset();
    this.editMode = false;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
