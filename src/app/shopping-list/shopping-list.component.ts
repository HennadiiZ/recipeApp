import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shared/shopping-list.model';
import { ShoppingListService } from '../_core/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  infoMessage: string = '';
  ingredients!: ShoppingList[];

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: ShoppingList[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
