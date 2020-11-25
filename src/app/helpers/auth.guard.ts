import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { ConnectedUser } from "app/models/connectedUser";

@Injectable({
  providedIn: "root",
})
export class AuthGuard
  implements
    CanActivate /* , CanActivateChild, CanDeactivate<unknown>, CanLoad */ {
  constructor(protected router: Router, protected service: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    const token = localStorage.getItem("token");

    // Si l'utilisateur est connecté
    if (connectedUser && token) {
      return this.checkToken(next, token, connectedUser);
    }
    // sinon le renvoyer sur la page connexion
    this.router.navigate(["/connexion"]);
    return false;
  }

  protected checkToken(
    next: ActivatedRouteSnapshot,
    token: string,
    localUser: ConnectedUser
  ): Promise<boolean> {
    let promise = new Promise<boolean>((resolve, reject) => {
      this.service
        .getConnectedUser(token)
        .toPromise()
        .then(
          (returnedUser) => {
            if (JSON.stringify(localUser) != JSON.stringify(returnedUser)) {
              localStorage.setItem("connectedUser", JSON.stringify(returnedUser));
            }
            let activateRoute = !(next.data.roles && next.data.roles.indexOf(returnedUser.role) === -1);
            if (!activateRoute) {
              this.router.navigate([""]);
            }
            resolve(activateRoute);
          },
          (err) => {
            localStorage.clear();
            location.href = "";
            reject(err);
          }
        );
    });
    return promise;
  }

  /* canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

   canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  } */
}
