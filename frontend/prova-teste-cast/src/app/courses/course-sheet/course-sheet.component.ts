import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Courses } from 'src/app/models/courses';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-course-sheet',
  templateUrl: './course-sheet.component.html'
})
export class CourseSheetComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'about', 'begin', 'end','categoryName'];
  courses: Courses[];

  dataSource = new MatTableDataSource<Courses>(this.courses);

  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courseService.getAll().subscribe(data => {
      this.courses = data;
    });

    this.dataSource.paginator = this.paginator;
  }

}
