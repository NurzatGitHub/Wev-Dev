import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}

  goToHome(): void{
    this.router.navigateByUrl('/home');
  }

  goToAlbums(): void{
    this.router.navigateByUrl('/albums');
  }

  goToAbout(): void{
    this.router.navigateByUrl('/about');
  }
}
