export class RecipeModel {
  public name: string;
  public desc: string;
  public imgPath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
  }
}
