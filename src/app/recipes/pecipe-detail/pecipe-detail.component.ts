import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/_core/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-pecipe-detail',
  templateUrl: './pecipe-detail.component.html',
  styleUrls: ['./pecipe-detail.component.css']
})
export class PecipeDetailComponent implements OnInit {

  // @Input() recipe!: Recipe;

  recipe!: Recipe;
  id!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params: Params) =>{
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
         //this.router.navigate(['edit'], {relativeTo: this.route}) //not working

         this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); //working
  }

}
