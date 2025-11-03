import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  selectedOption: string = '';
  othersValue: string = '';

  userList: string[] = [];
  newUser: string = '';
  studentList = [
    {
      name: 'Rajib',
      roll: '121196',
      city: 'Dhaka',
      gender: 'Male',
      status: true,
    },
    {
      name: 'Islam',
      roll: '121296',
      city: 'Rangpur',
      gender: 'Male',
      status: false,
    },
    {
      name: 'Azizul',
      roll: '121396',
      city: 'Rajshahi',
      gender: 'Male',
      status: false,
    },
    {
      name: 'Nurul',
      roll: '121496',
      city: 'Barishal',
      gender: 'Male',
      status: true,
    },
  ];

  addUser() {
    if (this.newUser) {
      this.userList.push(this.newUser.trim());
      this.newUser = '';
    }
  }
}
