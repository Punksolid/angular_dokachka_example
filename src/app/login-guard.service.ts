import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserSessionService} from "./services/user-session.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Is user logged in in Login Guard?  ' + this.userSessionService.isUserLogged());
    if (! this.userSessionService.isUserLogged()) {
      this.redirect();
    }

    return this.userSessionService.isUserLogged();
  }

  redirect() {
    console.log('redirecting');
    this.router.navigate(['/','login']);
  }

  constructor(
    private userSessionService: UserSessionService,
    private router: Router
  ) {}
}
