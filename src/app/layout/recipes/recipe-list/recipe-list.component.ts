import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Description of hamburger',
      'https://e7.pngegg.com/pngimages/415/27/png-clipart-fruit-logo-food-recipe' +
      '-business-seasoning-ingredients-natural-foods-dried-fruit.png'),
    new Recipe('Hamburger', 'Description of hamburger',
      'https://e7.pngegg.com/pngimages/415/27/png-clipart-fruit-logo-food-recipe' +
      '-business-seasoning-ingredients-natural-foods-dried-fruit.png')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
