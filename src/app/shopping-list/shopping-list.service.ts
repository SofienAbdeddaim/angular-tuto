import { IngredientModel } from "../shared/Ingredient.model";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { RecipeService } from "../recipes/recipes.service";

// same thing as recipe service
// in add ingredient we need to inform all component that an item added 

export class ShoppingService implements OnInit{

    ingredientAdded = new EventEmitter<IngredientModel[]>();
    ingredients: IngredientModel[] = [
        new IngredientModel('Apples', 5),
        new IngredientModel('Tomatoes', 10),
      ];

      constructor() {}

      ngOnInit() {
      }
      getIngredients() {
          return this.ingredients.slice();
      }

      onAddItem(ingd: IngredientModel) {
          this.ingredients.push(ingd);
          this.ingredientAdded.emit(this.ingredients.slice());
      }

      onAddItems(ings) {
          this.ingredients.push(...ings);
          this.ingredientAdded.emit(this.ingredients.slice());
      }

      
}