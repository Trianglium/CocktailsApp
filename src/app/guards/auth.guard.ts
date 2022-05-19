import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): true | UrlTree {
    return this.authenticateOrRedirect();
  }
  canLoad(): true | UrlTree {
    return this.authenticateOrRedirect();
  }

  private authenticateOrRedirect() {

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return this.router.parseUrl('/unauthorized');
    }
  }
  
}
