import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "./recipes.model";
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe
      .subscribe( recipe => {
        this.selectedRecipe = recipe;
      })
  }

}
