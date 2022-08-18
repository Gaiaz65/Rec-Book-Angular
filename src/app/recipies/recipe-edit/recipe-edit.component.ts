import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  get controls() {
    // a getter!
    return (<FormArray>this.receipeForm.get('ingredients')).controls;
  }
  id: number;
  editMode = false;
  receipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.innitForm();
    });
  }
  onSubmitForm() {
    console.log(this.receipeForm);
  }

  addNewIng() {
    (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(
          null,
          [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)]
        ),
      })
    );
  }

  private innitForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDescription = '';
    let recipeIngrediednts = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngrediednts.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.receipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      ImageUrl: new FormControl(recipeImageUrl, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngrediednts,
    });
  }
}
