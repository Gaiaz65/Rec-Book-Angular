
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('editform') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingService.editingItem.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingService.onAddIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

 deleteIng () {
   this.shoppingService.deleteIng (this.editItemIndex)
   this.clearForm();
 }

  clearForm() {
    this.editMode = false;
    this.slForm.reset();
  }
}
