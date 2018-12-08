import { IngredientModel } from "../shared/Ingredient.model";

export class RecipeModel {
  public name: string;
  public desc: string;
  public imgPath: string;
  public ingredients: IngredientModel[]

  constructor(name: string, desc: string, imgPath: string, ingts: IngredientModel[]) {
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
    this.ingredients = ingts;
  }
}
