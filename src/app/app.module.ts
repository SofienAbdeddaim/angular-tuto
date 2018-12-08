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
import { HighlightDirective } from './directive/highlight.directive';
import { BgColorRender2 } from './directive/bgcolorRender2.directive';
import { BgColorHostListener } from './directive/bgHostListener.directive';
import { BgHostBinding } from './directive/bgHostbinding.directive';
import { BgColordataDirective } from './directive/bgColorData.directive';
import { DropdownDirective } from './directive/selectedItem.directive';

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
    HighlightDirective,
    BgColorRender2,
    BgColorHostListener,
    BgHostBinding,
    BgColordataDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
