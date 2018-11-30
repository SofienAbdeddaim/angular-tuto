import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../shared/Ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel('apple', 5),
    new IngredientModel('banana', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

}
