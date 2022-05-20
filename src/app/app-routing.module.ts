import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { CocktailDetailsResolver } from './resolvers/cocktail-details.resolver';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientsDetailsComponent } from './ingredients-details/ingredients-details.component';
import { IngredientDetailsResolver } from './resolvers/ingredient-details.resolver';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: CocktailsListComponent
  },
  {
    path: 'cocktail-details',
    component: CocktailDetailsComponent
  },
  {
    path: 'cocktail-details/:id',
    component: CocktailDetailsComponent,
    canActivate: [
      AuthGuard
    ],
    resolve: {
      cocktail: CocktailDetailsResolver
    }
  },
  {
    path: 'ingredients-list',
    component: IngredientsListComponent
  },
  {
    path: 'ingredient-details',
    component: IngredientsDetailsComponent
  },
  {
    path: 'ingredient-details/:name',
    component: IngredientsDetailsComponent,
    resolve: {
      ingredient: IngredientDetailsResolver
    }
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [
      AuthGuard
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
