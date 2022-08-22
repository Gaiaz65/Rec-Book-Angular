import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipeResolverService } from './recipies/recipe-resolver.service';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeScreenComponent } from './recipies/recipe-screen/recipe-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipiesComponent } from './recipies/recipies.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipiesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeScreenComponent },
      {
        path: 'new',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShopingListComponent },
  { path: 'auth' , component: AuthComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}