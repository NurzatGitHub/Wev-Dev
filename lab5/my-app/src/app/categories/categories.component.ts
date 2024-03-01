import { Component } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-categories',
  // standalone: true,
  // imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  public categories = [...categories];
}
