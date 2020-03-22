import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentCourse } from 'src/app/models/student-course';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StudentCourseService } from 'src/app/services/studentcourse.service';

@Component({
  selector: 'app-student-course-sheet',
  templateUrl: './student-course-sheet.component.html'
})
export class StudentCourseSheetComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'name'];

  studentCourses: StudentCourse[];
  dataSource = new MatTableDataSource<StudentCourse>(this.studentCourses);

  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;

  constructor(private studentCourseService: StudentCourseService) { }

  ngOnInit() {
    this.studentCourseService.getAll().subscribe(data => {
      this.studentCourses = data;
    });

    this.dataSource.paginator = this.paginator;
  }

}
