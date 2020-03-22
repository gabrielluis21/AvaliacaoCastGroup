import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Students } from 'src/app/models/student';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-student-sheet',
  templateUrl: './student-sheet.component.html'
})
export class StudentSheetComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'name', 'address', 'city','birthday'];
  students: Students[];

  dataSource = new MatTableDataSource<Students>(this.students);

  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });

    this.dataSource.paginator = this.paginator;
  }

}

