import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('dummy','dummy', 'http://veslagman.ru/wp-content/uploads/2012/12/MGYxMmU5N.jpg',[
      new Ingredient('pork', 3),
      new Ingredient('tomato', 3)

    ]),
    new Recipe('salad','salad', 'http://veslagman.ru/wp-content/uploads/2012/12/MGYxMmU5N.jpg',[
      new Ingredient('pork', 3),
      new Ingredient('tomato', 3)
    ])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
