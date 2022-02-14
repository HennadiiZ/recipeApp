import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/_core/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-pecipe-list',
  templateUrl: './pecipe-list.component.html',
  styleUrls: ['./pecipe-list.component.css']
})
export class PecipeListComponent implements OnInit {

  public booleanValue: boolean = true;
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes!: Recipe[]

  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe): void {
  //     this.recipeWasSelected.emit(recipe);
  //     this.booleanValue = false;
  // }

}
