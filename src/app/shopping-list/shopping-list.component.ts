import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../shared/Ingredient.model";
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [];

  constructor(private shopService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    this.shopService.ingredientAdded
      .subscribe( ingts => {
          this.ingredients = ingts
      })
  }

}
