import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {

  return inject(AuthService).CheckCurrentUSerLogin()
    ? true
    : inject(Router).createUrlTree(['/login']);
};

export const AdminAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AuthService).isUserAdmin()
    ? true
    : inject(Router).createUrlTree(['/inventory']);
};
