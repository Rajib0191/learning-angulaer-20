import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
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

  bodyBg: string = 'bg-warning';
  textColor: string = 'whitesmoke';
}
