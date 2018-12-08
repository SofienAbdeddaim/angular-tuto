import { RecipeModel } from "./recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { IngredientModel } from "../shared/Ingredient.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";

// we can provide the service in recipes.component.ts 
// since we need it only in the recipes component and its childs
// declare our data in the service
// define a methode which return a copi of the data (slice)
// we can declare an event in the service and send it in a component and listen to it in another component [in case item selected, item added...]
@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<RecipeModel>();
    recipes: RecipeModel[] = [
        new RecipeModel('Burger', 
        'American Burger', 
        'https://us.123rf.com/450wm/cookelma/cookelma1502/cookelma150200141/36986768-tasty-and-appetizing-hamburger-cheeseburger.jpg?ver=6',
        [new IngredientModel('meat', 1), new IngredientModel('mergez', 2)]),
        new RecipeModel('Burger Egg', 
        'American Burger with Eggs', 
        'https://cdn.shopify.com/s/files/1/2181/5655/products/green-chile-egg-avocado-burger-1024px_2000x.jpg?v=1537887225',
        [new IngredientModel('cheese', 4), new IngredientModel('mergez', 2)])
      ];

      constructor(private shopService: ShoppingService) {
      }

      getRecipes() {
          return this.recipes.slice();
      }

      onSelectItem(data: RecipeModel) {
          this.selectedRecipe.emit(data);
      }

      onAddIngredients(ings) {
        this.shopService.onAddItems(ings);
      }
}