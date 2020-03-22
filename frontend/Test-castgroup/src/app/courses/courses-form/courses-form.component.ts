import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/models/courses';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html'
})
export class CoursesFormComponent implements OnInit {

  curso: Courses;

  hide = true;

  //http: CoursesService;

  cadCourseForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.cadCourseForm = this.formBuilder.group({
    
      DescricaoAsunto: '' ,
      DataInicio: '' ,
      DataFim: '',
      Categoria: '' ,
    
    });
  }

  ngOnInit(): void {
  }

  generateForm(course){
    
    this.cadCourseForm = this.formBuilder.group({
    
      DescricaoAsunto:  course.description ,
      DataInicio: course.begin ,
      DataFim: course.end,
      Categoria: course.category.name
    
    }); 
  }

  save(cadCourseForm){
    
    this.curso.description =  cadCourseForm.DescricaoAsunto
    this.curso.begin =  cadCourseForm.DataInicio
    this.curso.end =  cadCourseForm.DataFim
    this.curso.category.description =  cadCourseForm.Categoria
    
  }


}
