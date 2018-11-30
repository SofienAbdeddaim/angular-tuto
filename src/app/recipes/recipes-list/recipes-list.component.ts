import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('Burger', 'American Burger', 'https://us.123rf.com/450wm/cookelma/cookelma1502/cookelma150200141/36986768-tasty-and-appetizing-hamburger-cheeseburger.jpg?ver=6'),
    new RecipeModel('Burger Egg', 'American Burger with Eggs', 'https://cdn.shopify.com/s/files/1/2181/5655/products/green-chile-egg-avocado-burger-1024px_2000x.jpg?v=1537887225')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

}
