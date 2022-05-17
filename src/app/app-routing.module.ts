import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { CocktailDetailsResolver } from './resolvers/cocktail-details.resolver';
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
    resolve: {
      cocktail: CocktailDetailsResolver
    }
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
