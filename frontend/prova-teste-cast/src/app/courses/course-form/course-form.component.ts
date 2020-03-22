import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Courses } from 'src/app/models/courses';
import { Category } from 'src/app/models/category';
import { CoursesService } from 'src/app/services/courses.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html'
})
export class CourseFormComponent implements OnInit {
  
  selected="Selecione uma opção";
  newCourseForm: FormGroup;
  
  private course: Courses;
  categories: Category[];

  constructor(private categoryService: CategoryService,
    private courseService: CoursesService,
    private formBuilder: FormBuilder) {
      this.categoryService.getAll().subscribe(data => {
        console.log(data);
        this.categories = data;
      });
     }

  ngOnInit() {
    
    this.newCourseForm = this.formBuilder.group({
      description: '',
      beginDate: '',
      endDate:'',
      category: '',
    });
  }

  save(){
    this.course.description = this.newCourseForm.value.description;
    this.course.begin = this.newCourseForm.value.description;
    this.course.end = this.newCourseForm.value.description;

    this.courseService.add(this.course);
  }

}
