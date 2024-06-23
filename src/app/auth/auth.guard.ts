import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; 
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.ussGuardado()){
    return true;
  }
  router.navigate(["login"], {queryParams: {blockedPage: state.url}})
  return false;
};