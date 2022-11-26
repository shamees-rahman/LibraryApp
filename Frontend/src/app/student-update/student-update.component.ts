import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {

  constructor(private api:ApiService, private myroute: Router){}
  name='';
  college='';
  rollno='';
  admno='';
  _id='';

  searchbtnclick(){
    document.getElementById('details')!.style.display='block'
this.api.searchstudent({"name":this.name}).subscribe((res:any)=>{

  this.admno = res[0].admno
  this.college  = res[0].college
  this.rollno = res[0].rollno
  this._id = res[0]._id
})
  }

  updatebtnclick(){
    let data = {"_id":this._id,"name":this.name,"rollno":this.rollno,"college":this.college,"admno":this.admno}
    console.log(data)
this.api.updatestudent(data).subscribe((res:any)=>{
  this.myroute.navigateByUrl('viewall')
})
  }
  deletebtnclick(){
    console.log(this._id)
    let data = {"_id":this._id,"name":this.name,"rollno":this.rollno,"college":this.college,"admno":this.admno}
    this.api.deletestudent(data)
  }
}
