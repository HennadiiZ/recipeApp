import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingList } from 'src/app/shared/shopping-list.model';
import { ShoppingListService } from 'src/app/_core/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  // ingredientAdded = new EventEmitter<{name: string; amount: number}>();
  @Output() ingredientAdded = new EventEmitter<ShoppingList>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){

      const newIngredient = new ShoppingList(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
      // this.ingredientAdded.emit(newIngredient);
      this.shoppingListService.addIngredient(newIngredient);
      this.nameInputRef.nativeElement.value = ''
      this.amountInputRef.nativeElement.value = ''
  }

  delete(){

  }

  clear(){

  }

  submit(){

  }
}
