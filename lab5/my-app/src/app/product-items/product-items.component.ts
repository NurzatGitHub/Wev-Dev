import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-items',
  // standalone: true,
  // imports: [],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {
  @Input() product:any;
  @Input() categoryId: number=0;
  @Output() remove = new EventEmitter();

  liked = false;

  removeProduct() {
    console.log(this.product)
    this.remove.emit(this.product);
  }

  likeProduct() {
    if(this.liked !== true){
      this.liked = true;
      this.product.likes++;
    }else{
      this.liked = false;
      this.product.likes--;
    }
  }

  shareTg(urlKaspi:string) {
    window.location.href = `https://t.me/share/url?url=${encodeURIComponent(urlKaspi)}`;
  }

  shareWa(urlKaspi:string) {
    window.location.href = `whatsapp//:send?text=${encodeURIComponent(urlKaspi)}`;
  }
}
