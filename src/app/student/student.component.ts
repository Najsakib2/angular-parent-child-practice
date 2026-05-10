import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  @Input() childStudent?: Student;
  @Output() studentClickEvent = new EventEmitter<[string, number]>();

  click() {
    if (this.childStudent) {
      this.studentClickEvent.emit([
        this.childStudent.name,
        this.childStudent.age,
      ]);
    }
  }
}
