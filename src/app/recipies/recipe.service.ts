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
  constructor(private slService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addToshoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredient(ingredients);
  }
}
