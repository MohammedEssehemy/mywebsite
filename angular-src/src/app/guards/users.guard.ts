import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot }
 from "@angular/router";
import { UsersService } from "../services/users.service";


@Injectable()
export class UsersGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //    state.url => url
        if (this.usersService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }


    constructor(
        private router: Router, private usersService: UsersService
    ) {

    }



}