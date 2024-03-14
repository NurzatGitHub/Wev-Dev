import { Component } from '@angular/core';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Photo[] = [];
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(event: any): void {
    event.preventDefault(); 

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        const newPhoto: Photo = { 
          albumId: 1,
          id: this.photos.length + 1, 
          title: 'New Photo',
          url: reader.result as string, 
          thumbnailUrl: reader.result as string 
        };
        this.photos.push(newPhoto);
      };
      this.selectedFile = null;
    }
  }
}
