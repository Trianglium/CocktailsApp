import { TestBed } from '@angular/core/testing';

import { IngredientDetailsResolver } from './ingredient-details.resolver';

describe('IngredientDetailsResolver', () => {
  let resolver: IngredientDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IngredientDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
