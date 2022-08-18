import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShoppingEditComponent } from './shoping-list/shopping-edit/shopping-edit.component';
import { ShoppingService } from './shoping-list/shopping.service';
import { RecipeScreenComponent } from './recipies/recipe-screen/recipe-screen.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeScreenComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
