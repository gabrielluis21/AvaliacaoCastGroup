import { Category } from './category';

export class Courses { 
    id: number;
    description: string;
    begin: Date;
    end: Date;
    studentsCount: number;
    category: Category;
}

