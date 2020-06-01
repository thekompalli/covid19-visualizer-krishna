import { Injectable } from '@angular/core';
import {  CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthsService } from './auths.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private auth:AuthsService, private router:Router, private toastr: ToastrService){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(["/"]);
      localStorage.removeItem('token');
      this.toastr.error("Please Log-in to continue");
      return false;
    }
  }
}
