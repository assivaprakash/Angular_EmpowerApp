import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public eList="Employee List";
  public eDataList=[
    {"id":1, "name":"siva", "aga":35},
    {"id":2, "name":"Ravi", "aga":35}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
