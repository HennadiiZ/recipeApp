import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('test', 'test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F04%2F02%2F283212_CopyCat-MoonPies_MFS_0032.jpg&w=400&h=400&c=sc&poi=%5B483%2C786%5D&q=60'),
    new Recipe('test two', 'yummy', 'https://hostimul.com/uploads/catalog/blog/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg')
  ];



  getRecipes(){
    return this.recipes.slice(); // this will simply return a new array , not old recipes. just a copy
  }

}
