import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { CocktailService } from '../services/cocktail.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientDetailsResolver implements Resolve<Observable<Ingredient>>  {
  constructor(private cocktailService: CocktailService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Ingredient> {
    const name = route.paramMap.get('name');
    console.log("NAME = ", name);
    
    return this.cocktailService.getIngredientByName(name);
  }
}
