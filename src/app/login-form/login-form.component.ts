import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators} from '@angular/forms';
import { AuthsService } from '../auths.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginDetails:any;
  valid=false;

  constructor(private auth:AuthsService, private fb:FormBuilder, private router:Router, private toastr: ToastrService) { 
    this.loginDetails=this.fb.group({
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }
  login(){
    if(this.loginDetails.valid){
      
      this.auth.login(this.loginDetails.value).subscribe(
        data=>{
          this.toastr.success("Login Success", "Welcome", {timeOut:3000})
        this.auth.storeToken(data.token);
        this.router.navigate(["/home"]);

      },
        error=>{
         this.toastr.warning(error.error.message,'Details Mismatch', {timeOut: 5000});
      }
      );
    }else{
      this.valid=true;
    }
  }

}
