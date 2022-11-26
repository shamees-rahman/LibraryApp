import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loginToBackend(data:any){
    console.log("in login to backend fnctn")

    return this.http.post<any>('http://localhost:8000/api/login',data);
  }
  loggedIn(){
    return !! localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
