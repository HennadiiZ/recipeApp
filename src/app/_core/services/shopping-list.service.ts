import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShoppingList } from 'src/app/shared/shopping-list.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientsChanged = new EventEmitter<ShoppingList[]>();
  ingredientsChanged = new Subject<ShoppingList[]>();
  infoMessage: string = '';

  private ingredients: ShoppingList[] = []

  constructor(){}

  public getIngredients(): ShoppingList[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient:ShoppingList ){
      
      if(ingredient.amount && ingredient.name.trim()){
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice())
        this.ingredientsChanged.next(this.ingredients.slice()) 
        this.infoMessage = '';
      } else{
        this.infoMessage = 'These fields cannot be empty.'
      } 
  }

  addIngredients(ingredients:ShoppingList[]){
      this.ingredients.push(...ingredients);
      // this.ingredientsChanged.emit(this.ingredients.slice());
      this.ingredientsChanged.next(this.ingredients.slice());
  }
}
