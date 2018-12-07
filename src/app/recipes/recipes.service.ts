import { OnInit, EventEmitter } from "@angular/core";
import { RecipeModel } from "./recipes.model";

// we can provide the service in recipes.component.ts since we need it only in the recipes component and its childs
// declare our data in the service
// define a methode which return a copi of the data (slice)
// we can declare an event in the service and send it in a component and listen to it in another component [in case item selected, item added...]