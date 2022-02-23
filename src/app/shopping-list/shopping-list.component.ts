import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingList } from '../shared/shopping-list.model';
import { ShoppingListService } from '../_core/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  infoMessage: string = '';
  ingredients!: ShoppingList[];
  subscription!: Subscription;

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: ShoppingList[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(i: number){
      this.shoppingListService.startedEditing.next(i);
  }
}
