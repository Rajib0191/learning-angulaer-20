import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  course: string = 'Angular';
  courseName = signal<string>('Angular 20');

  courseList = signal<string[]>(['Angular', 'React', 'TypeScript']);

  changeCourseDetails() {
    this.course = 'React.js';
    this.courseName.set('React.js 19');
  }

  handleAddCourse(courseName: string) {
    this.courseList.update((prev: string[]) => [...prev, courseName]);
  }
}
