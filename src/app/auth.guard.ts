import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor( private _authService: AuthService,
    private _router : Router) {}

    canActivate(): boolean {
      if(this._authService.anyUserLogged()){
        return true
      } else {
        window.alert("You are not logged In")
        this._router.navigate(['/login'])
        return false
      }
    }
  
}
