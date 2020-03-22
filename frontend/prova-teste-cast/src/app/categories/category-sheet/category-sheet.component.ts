import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-sheet',
  templateUrl: './category-sheet.component.html'
})
export class CategorySheetComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'descricao'];
  categories: Category[];

  dataSource = new MatTableDataSource<Category>(this.categories);

  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });

    this.dataSource.paginator = this.paginator;
  }

}
