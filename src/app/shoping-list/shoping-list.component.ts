import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';


import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss'],
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingChangeSub: Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getShoppingList();
    this.ingChangeSub = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }

  editItem(index: number) {
    this.shoppingService.editingItem.next(index);
  }

}
