import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    console.log(this.http);
    return this.http.get<Student[]>(`api/students`)
      .pipe(
        map(response => response.map(student => this.mapStudentFromApiResponse(student)))
      );
  }

  getStudentsBySchool(school: string): Observable<Student[]> {
    return this.http.get<Student[]>(`api/students/school/${school}`)
      .pipe(
        map(response => response.map(student => this.mapStudentFromApiResponse(student)))
      );
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`api/students/${id}`)
      .pipe(
        map(student => this.mapStudentFromApiResponse(student))
      );
  }

  insertStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`api/students`, student);
  }

  updateStudent(id: number, student: Student): Observable<void> {
    return this.http.put<void>(`api/students/${id}`, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`api/students/${id}`);
  }

  private mapStudentFromApiResponse(response: any): Student {
    return {
      studentId: response.studentId,
      firstName: response.firstName,
      lastName: response.lastName,
      school: response.school
    };
  }
}

export interface Student {
  studentId: number;
  firstName: string;
  lastName: string;
  school: string;
}
