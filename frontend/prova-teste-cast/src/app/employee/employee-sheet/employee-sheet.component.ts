import { Component, OnInit, ViewChild } from '@angular/core';
import { Employees } from 'src/app/models/employee';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-sheet',
  templateUrl: './employee-sheet.component.html'
})
export class EmployeeSheetComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'name', 'job', 'hiring','birthday']
  employees: Employees[];

  dataSource = new MatTableDataSource<Employees>(this.employees);

  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });

    this.dataSource.paginator = this.paginator;

  }

}
