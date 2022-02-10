import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shared/shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ShoppingList[] = [
    // new ShoppingList('apple', 5),
    // new ShoppingList('tomatoes', 15),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(Ingredient: ShoppingList){
     this.ingredients.push(Ingredient)
  }

}
