import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnInit {

  newCategoryForm: FormGroup;
  
  category: Category

  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.newCategoryForm = this.formBuilder.group({
      desciption: ['', Validators.required]
    });
  }

  submit(){
    this.category.description = this.newCategoryForm.value.desciption;
    this.categoryService.add(this.category.description);
  }

}
