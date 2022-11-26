import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-viewall',
  templateUrl: './student-viewall.component.html',
  styleUrls: ['./student-viewall.component.css']
})
export class StudentViewallComponent {
data:any
constructor(private api:ApiService){
  api.viewstudent({}).subscribe((res)=>{
    this.data = res
  })
}

}
