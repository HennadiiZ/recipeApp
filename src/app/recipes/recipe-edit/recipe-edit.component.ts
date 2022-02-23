import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/_core/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ){}

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            // console.log(this.editMode);
            this.initForm();
      })
  }

  onSubmit(){
    console.log(this.recipeForm.value);
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if(this.editMode){
      recipeName = this.recipeService.getRecipe(this.id).name
      recipeImagePath = this.recipeService.getRecipe(this.id).imagePath;
      recipeDescription = this.recipeService.getRecipe(this.id).description;
    }

      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName),
        'imagePath': new FormControl(recipeImagePath),
        'description': new FormControl(recipeDescription),

      });

      // console.log(this.recipeForm);
  }

}
