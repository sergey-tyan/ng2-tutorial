import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {recipesRouting} from "./recipes.routing";

@NgModule({
    declarations:[
      RecipesComponent,
      RecipeListComponent,
      RecipeItemComponent,
      RecipeDetailComponent,
      RecipeEditComponent,
      RecipeStartComponent
    ],
    imports:[
      CommonModule,
      ReactiveFormsModule,
      recipesRouting
    ]
})
export class RecipesModule{}
