export class RecipeModel {
  public name: string;
  public desc: string;
  public imgPath: string;
  // ingredients: Ingredients[]

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
  }
}
