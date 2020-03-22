import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { StudentCourse } from 'src/app/models/student-course';

@Component({
  selector: 'app-student-course-add-form',
  templateUrl: './student-course-add-form.component.html'
})
export class StudentCourseAddFormComponent implements OnInit {

  addCourseForm: FormGroup;

  studentCourse: StudentCourse;

  constructor(private formBuild: FormBuilder,
    private courseService: CoursesService) { }

  ngOnInit() {
    this.addCourseForm = this.formBuild.group({
      name: ['', Validators.required],
      begin: ['', Validators.required],
      end: ['', Validators.required]
    })
  }

  submit(){
    this.courseService.getByAbout(this.addCourseForm.value.name).subscribe(data =>{
      if(data != null){
        this.studentCourse.course = data;
      }
    })
  }

}
