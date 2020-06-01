import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators} from '@angular/forms';
import { AuthsService } from '../auths.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginDetails;
  valid=false;

  constructor(private auth:AuthsService, private fb:FormBuilder, private router:Router) { 
    this.loginDetails=this.fb.group({
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }
  login(){
    if(this.loginDetails.valid){
      // console.log(this.loginDetails.value);
      this.auth.login(this.loginDetails.value).subscribe(
        data=>{
        // alert("login successfull");
        this.auth.storeToken(data.token);
        // console.log(data);
        this.router.navigate(["/home"]);
      },
        error=>{
          // console.log(error);
        alert(error.error.message);
      }
      );
    }else{
      this.valid=true;
    }
  }

}
