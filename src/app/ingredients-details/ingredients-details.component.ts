import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-ingredients-details',
  templateUrl: './ingredients-details.component.html',
  styleUrls: ['./ingredients-details.component.scss']
})
export class IngredientsDetailsComponent implements OnInit {
  ingredient: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { ingredient: Ingredient}) => {
      this.ingredient = data.ingredient;
    })
  }

}
