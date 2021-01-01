import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Ingredient} from '../../../models/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(ingredient);
  }

}
