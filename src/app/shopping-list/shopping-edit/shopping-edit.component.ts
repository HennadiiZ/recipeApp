import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  @Output() ingredientAdded = new EventEmitter<ShoppingList>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
      const newIngredient = new ShoppingList(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
      this.shoppingListService.addIngredient(newIngredient);
      this.nameInputRef.nativeElement.value = ''
      this.amountInputRef.nativeElement.value = ''
  }

  // onAddItem(form: any){
  //   const newIngredient = new ShoppingList(form.value.name , form.value.amount);
  //   this.shoppingListService.addIngredient(newIngredient);
  //   console.log(form.value.name)
  // }

  delete(){

  }

  clear(){

  }

  submit(){

  }
}
