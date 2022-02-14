import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/_core/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-pecipe-detail',
  templateUrl: './pecipe-detail.component.html',
  styleUrls: ['./pecipe-detail.component.css']
})
export class PecipeDetailComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
