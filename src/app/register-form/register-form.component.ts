import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthsService } from '../auths.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  
  registerDetails;
  valid=false;
  constructor(private auth:AuthsService, private fb:FormBuilder, private router:Router) { 
    this.registerDetails=this.fb.group({
      firstName:this.fb.control("",[Validators.required]),
      lastName:this.fb.control("",[Validators.required]),
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }
  register(){
    if(this.registerDetails.valid){
      // console.log(this.registerDetails.value);
      this.auth.register(this.registerDetails.value).subscribe(
        data=>{
        alert("Registration successfull");
        this.router.navigate(["/"]);
      },
        error=>{
          // console.log(error);
        alert(error.error.message);
      }
        )
    }else{
      this.valid=true;
    }
  }

}
