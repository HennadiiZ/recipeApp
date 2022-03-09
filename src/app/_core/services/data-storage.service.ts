import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "src/app/recipes/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService  {
    
    myUrl = 'https://ng-guide-d3833-default-rtdb.firebaseio.com/'
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes(); 
        this.http.put(`${this.myUrl}recipes.json`, recipes)
        .subscribe(response=>{
            console.log(response);
        });
    }

    fetchRecipes(){
        this.http.get<Recipe[]>(`${this.myUrl}recipes.json`)
        .pipe(map(recipes=>{
            return recipes.map(recipe => { return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }});
        }))
        .subscribe(response=>{
            console.log(response);
            this.recipeService.setRecipes(response);
        });
    }
}