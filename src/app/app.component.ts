import { Component } from '@angular/core';
import { Student } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  student: Student[] = [
    { id: 1, name: 'Alice', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, course: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, course: 'Physics' },
    { id: 4, name: 'David', age: 19, course: 'Chemistry' },
  ];
  selectedStudentName?: string;
  selectedStudentAge?: number;

  onStudentClick(name: string, age: number) {
    this.selectedStudentName = name;
    this.selectedStudentAge = age;
  }
}
