import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  id: string;
  cocktails$: Observable<Cocktail[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(paramsMap => this.id = paramsMap.get('id'))
    ).subscribe();
  }

}
