import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthsService } from '../auths.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  
  registerDetails;
  valid=false;
  constructor(private auth:AuthsService, private fb:FormBuilder, private router:Router, private toastr: ToastrService) { 
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
      this.auth.register(this.registerDetails.value).subscribe(
        data=>{
          this.toastr.success("Registration Success")
          this.router.navigate(["/"]);
      },
        error=>{
          this.toastr.error(error.error.message);
      }
        )
    }else{
      this.valid=true;
    }
  }

}
