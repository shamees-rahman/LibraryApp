import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={email:'',password:''};
 

  
  constructor(private auth:AuthService,private router:Router) { }

  // loginForm: any=new FormGroup({
  //   e1:new FormControl(null),
  //   p1:new FormControl(null)
  // })
  ngOnInit(): void {
  }
 login(form: any){

  console.log('---------',this.user);
  this.router.navigateByUrl('/home');
  

  this.auth.loginToBackend(this.user).subscribe(( res:any)=>{
 
    console.log('data from backend',res);

    localStorage.setItem('token',res.token)

  this.router.navigateByUrl('home');
})
  }

}
