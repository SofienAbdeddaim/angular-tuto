import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipes.model";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  // recipe: RecipeModel; should receive data from recipe component
  constructor() { }

  ngOnInit() {
  }

}
