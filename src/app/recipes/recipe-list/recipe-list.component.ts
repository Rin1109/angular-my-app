import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7l4vM-5YFzciaNWcQzNTCxe_AqhNx1Bw7tbKYh-rbhY9EnxrgYw7iu8Vopac5ppdaME&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
