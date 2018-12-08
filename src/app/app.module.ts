import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesItemComponent} from "./recipes/recipes-list/recipes-item/recipes-item.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipesDetailsComponent} from "./recipes/recipes-details/recipes-details.component";
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {HeaderComponent} from "./header/header.component";
import { ShoppingService } from './shopping-list/shopping-list.service';
import { DropDownD } from './directive/selectedItem.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownD
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
