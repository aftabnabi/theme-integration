import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    StudentsComponent,
    StudentDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },{
        path: 'create-student',
        component: CreateStudentComponent
      },{
        path: 'update-student',
        component: UpdateStudentComponent
      },{
        path: 'delete-student',
        component: DeleteStudentComponent
      },{
        path: 'student/:Id',
        component: StudentDetailComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
