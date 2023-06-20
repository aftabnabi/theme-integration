import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents()
      .subscribe(students => {
        this.students = students;
      });
  }
}
