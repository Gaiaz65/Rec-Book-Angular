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
      ' Vegan Soup',
      'Pack in the goodness with this vibrant green soup, packed with leeks, peas and watercress. It is tasty and healthy too, both low in calories and fat.',
      'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/48/49/18/r7Ng9fH4TemoZJdH8QEl_2016-02-29%252012.38.31.jpg',
      [
        new Ingredient('ounce can chickpeas, drained and rinsed', 15),
        new Ingredient('salt', 1),
        new Ingredient('turmeric', 1),
        new Ingredient('cups vegetable stock', 2),
        new Ingredient('lemon juice', 2),
        new Ingredient('coconut milk', 3),
        new Ingredient('garlic cloves, crushed', 2),
      ]
    ),
    new Recipe(
      'Healthy Chicken',
      'Serving:179 calories; protein 12.8g; carbohydrates 18.1g; fat 6.5g; cholesterol 33.6mg.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F1033249144001%2Fbef450f6-ff79-47a9-9d66-1ceb7f4e8f9e%2F9f58b44d-2095-4714-a633-f37b4f14d9c0%2F1280x720%2Fmatch%2Fimage.jpg',
      [
        new Ingredient('Tablespoons soy sauce', 2),
        new Ingredient('Rice (serves)', 5),
        new Ingredient(
          'skinless, boneless chicken breast halves, cut into bite-size pieces',
          2
        ),
      ]
    ),
    new Recipe(
      'Potato and Corned Beef',
      'In this healthy ground beef and potatoes recipe, ground beef and potatoes are paired with colorful veggies, including kale, tomato and peppers. Everything is cooked in one skillet, which allows for layers of flavor to build quickly while also cutting back on the number of dishes.',
      'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Corned-Beef-and-Potato-Hash-In-A-Pan.png',
      [
        new Ingredient('Potatoes', 4),
        new Ingredient('Beaf', 3),
        new Ingredient('Pepper', 2),
        new Ingredient('Onions', 1),
      ]
    ),
    new Recipe(
      'Sparkling Kiwi Fresh',
      'Full of vitamins, calories amount is close to nothing',
      'https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Kiwi-Smoothie.png',
      [
        new Ingredient('Kiwi', 8),
        new Ingredient('Sugar', 1),
        new Ingredient('Sparkling water', 1),
      ]
    ),
    new Recipe(
      'Apple Pie',
      'This recipe is hands down, my favorite apple pie made from scratch! Juicy apple slices are coated in sugar and spices and then baked to perfection inside a flaky homemade pie crust.',
      'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg',
      [
        new Ingredient('sea salt', 0.5),
        new Ingredient('Apples', 10),
        new Ingredient('light or dark brown sugar', 4),
      ]
    ),
  ];

  constructor(private slService: ShoppingService) {}

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
