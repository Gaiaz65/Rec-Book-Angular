import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
