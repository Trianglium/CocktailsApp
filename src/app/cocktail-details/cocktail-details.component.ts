import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, delay } from 'rxjs';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  
  cocktail$: Observable<Cocktail>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    this.cocktail$ = this.activatedRoute.paramMap.pipe(
      delay(2000),
      switchMap(paramsMap => {
        const id = paramsMap.get('id');
        return this.cocktailService.getById(id);
      })
    )
  }

}
