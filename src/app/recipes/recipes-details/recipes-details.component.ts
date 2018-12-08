import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipes.model";
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe: RecipeModel;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSendIngs() {
    this.recipeService.onAddIngredients(this.recipe.ingredients);
  }

}
