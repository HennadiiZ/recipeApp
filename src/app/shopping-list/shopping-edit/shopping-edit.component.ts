import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingList } from 'src/app/shared/shopping-list.model';
import { ShoppingListService } from 'src/app/_core/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

   @ViewChild('f') shoppingListForm!: NgForm;

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<ShoppingList>();
  private subscription!: Subscription
  editMode = false;
  editedItemIndex!: number;
  editedItem!: ShoppingList;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription =  this.shoppingListService.startedEditing
    .subscribe((i: number) => {
        this.editMode = true;
        this.editedItemIndex  = i;
        this.editedItem = this.shoppingListService.getIngredient(i);
        // this.shoppingListForm.setValue({
        //       name: this.editedItem.name, 
        //       amount: this.editedItem.amount
        // })
        this.nameInputRef.nativeElement.value = this.editedItem.name;
        this.amountInputRef.nativeElement.value = this.editedItem.amount
    })
  }
  

  onAddItem(){
      const newIngredient = new ShoppingList(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
      
      if(this.editMode){
        this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
      }else{
        this.shoppingListService.addIngredient(newIngredient);
      }
      
      this.nameInputRef.nativeElement.value = ''
      this.amountInputRef.nativeElement.value = ''
      this.editMode = false;
  }

  // onAddItem(form: any){
  //   const newIngredient = new ShoppingList(form.value.name , form.value.amount);
  //   this.shoppingListService.addIngredient(newIngredient);
  //   console.log(form.value.name)
  // }

  delete(){
    
  }

  clear(){
    this.nameInputRef.nativeElement.value = ''
    this.amountInputRef.nativeElement.value = ''
    this.editMode = false; 
  }

  submit(){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
