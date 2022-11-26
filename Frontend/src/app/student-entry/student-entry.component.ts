import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})

export class StudentEntryComponent {

  constructor(private api:ApiService, private myroute:Router){}
name='';
college='';
rollno='';
admno='';
_id='';

submitbtnclick(){
  let data={"admno":this.admno,"name":this.name,"college":this.college,"rollno":this.rollno}
  console.log(data)
  this.api.addstudent(data).subscribe((res:any)=>{
    console.log(res)
    if (res.status=="success"){
      alert("Successfully added")
      this.myroute.navigateByUrl('viewall')
    }
    else{
      alert("Error")
    }
  })
}


}
  