import { Injectable } from '@angular/core';
import { ShoppingList } from 'src/app/shared/shopping-list.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  infoMessage: string = '';

  private ingredients: ShoppingList[] = [
    // new ShoppingList('apple', 5),
    // new ShoppingList('tomatoes', 15),
  ]


  constructor(){}

  public getIngredients(): ShoppingList[] {
      // return this.ingredients.slice();
      return this.ingredients
  }

  addIngredient(ingredient:ShoppingList ){
      // this.ingredients.push(ingredient);

      if(ingredient.amount && ingredient.name.trim()){
        this.ingredients.push(ingredient);
        this.infoMessage = '';
      } else{
        this.infoMessage = 'These fields cannot be empty.'
      } 
  }
}
