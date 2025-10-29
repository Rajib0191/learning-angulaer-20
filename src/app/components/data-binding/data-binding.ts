import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular 20 Tutorial';
  isActive: boolean = false;
  rollNumber: number = 44610;
  date: Date = new Date();
  minLength: number = 5;
  initialValue: number = 20;

  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  constructor() {
    console.log(this.courseName);
  }

  handleClick(): void {
    alert('You click the button!');
  }

  handleSum() {
    this.result = this.number1 + this.number2;
  }
}
