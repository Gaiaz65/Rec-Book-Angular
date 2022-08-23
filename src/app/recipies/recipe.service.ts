import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ShoppingService } from './../shoping-list/shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {
  recipesUpdated = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      'Burger1',
      'Cura',
      'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410',
      [new Ingredient('Meat', 10), new Ingredient('Apples', 10)]
    ),
  ];

  constructor(private slService: ShoppingService) {}

  check() {
    console.log(this.recipes);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesUpdated.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
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
