import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../services/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class GuarduserGuard implements CanActivateChild {
  constructor(private aus: AuthuserService, private router: Router) { }
  CanActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        if (this.aus.userLoggedIn() == true) {
          resolve(true)
        } else {
          this.router.navigate(['/loginuser'])
          localStorage.removeItem('token')
          resolve(false)
        }
      })
  }
  
}
