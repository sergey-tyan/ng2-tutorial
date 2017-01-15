import {Injectable, EventEmitter} from '@angular/core';

import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';
import {Headers, Http, Response} from "@angular/http";
import "rxjs/RX";

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();
  private url = 'https://recipebook-66fc2.firebaseio.com/';
  recipes: Recipe[] = [
    new Recipe('dummy', 'dummy', 'http://veslagman.ru/wp-content/uploads/2012/12/MGYxMmU5N.jpg', [
      new Ingredient('pork', 3),
      new Ingredient('tomato', 3)

    ]),
    new Recipe('salad', 'salad', 'http://veslagman.ru/wp-content/uploads/2012/12/MGYxMmU5N.jpg', [
      new Ingredient('pork', 3),
      new Ingredient('tomato', 3)
    ])
  ];

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.url + 'recipes.json', body, {headers});
  }

  fetchData(){
    return this.http.get(this.url + 'recipes.json')
      .map((response: Response)=>response.json())
      .subscribe(
        (data: Recipe[])=>{
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
