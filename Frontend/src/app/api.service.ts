import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  addstudent(data:any){
    return this.http.post('http://localhost:8000/api/studententry',data)
  }
  viewstudent(data:any){
    return this.http.post('http://localhost:8000/api/studentviewall',data)
  }
  updatestudent(data:any){
    return this.http.post('http://localhost:8000/api/studentupdate',data)
  }
  searchstudent(data:any){
    return this.http.post('http://localhost:8000/api/studentsearch',data)
  }
  deletestudent(data:any){
    console.log(data)
    return this.http.delete('http://localhost:8000/api/studentdelete',data)
  }
}
