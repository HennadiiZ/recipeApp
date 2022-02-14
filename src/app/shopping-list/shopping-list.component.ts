import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shared/shopping-list.model';
import { ShoppingListService } from '../_core/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
// export class ShoppingListComponent implements OnInit {
//   ingredients: ShoppingList[] = [
//     // new ShoppingList('apple', 5),
//     // new ShoppingList('tomatoes', 15),
//   ]

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onIngredientAdded(Ingredient: ShoppingList){
//      this.ingredients.push(Ingredient)
//   }

// }

export class ShoppingListComponent implements OnInit {
  // ingredients: ShoppingList[] = [
     // new ShoppingList('apple', 5),
     // new ShoppingList('tomatoes', 15),
  // ]
  infoMessage: string = '';
  ingredients!: ShoppingList[];

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
  }

  // onIngredientAdded(Ingredient: ShoppingList){

  //     if(Ingredient.amount && Ingredient.name.trim()){
  //       this.ingredients.push(Ingredient)
  //       this.infoMessage = '';
  //     } else{
  //       this.infoMessage = 'These fields cannot be empty.'
  //     } 
  // }

}
