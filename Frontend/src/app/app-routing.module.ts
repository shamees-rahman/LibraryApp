import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentViewallComponent } from './student-viewall/student-viewall.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:'', component:LoginComponent},{path:'home', component:HomeComponent, children:[{path:'entry', component:StudentEntryComponent},
{path:'viewall', component:StudentViewallComponent},
{path:'update', component:StudentUpdateComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
