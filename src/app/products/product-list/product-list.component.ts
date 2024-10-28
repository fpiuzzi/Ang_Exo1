import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() checkProduct = new EventEmitter<Product>();
  @Input() keyword: string = '';

  handleCheckProduct(product: Product): void {
    product.checked = !product.checked;
    this.checkProduct.emit(product);
  }

  handleDelete(product: Product): void {
    this.deleteProduct.emit(product);
  }
}
