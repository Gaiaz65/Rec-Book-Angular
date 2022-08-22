import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { ShoppingService } from './../shoping-list/shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Curalua',
      'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410',
      [new Ingredient('Meat', 10), new Ingredient('Apples', 10)]
    ),
    new Recipe(
      'Burger',
      'Curalua',
      'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410',
      [new Ingredient('Meat', 10), new Ingredient('Apples', 10)]
    ),
  ];

  recipesUpdated = new Subject<Recipe[]>();
  

  constructor(private slService: ShoppingService) {}


  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    console.log (this.recipes)
    this.recipesUpdated.next(recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addToshoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredient(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesUpdated.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }
}
