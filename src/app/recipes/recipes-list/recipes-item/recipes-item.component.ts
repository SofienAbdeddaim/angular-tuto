import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../recipes.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  // recipe: RecipeModel; should receive data from recipe-list component
  // recipeSelected; should send event to recipe-list component when item selected

  constructor() { }

  ngOnInit() {
  }

}
