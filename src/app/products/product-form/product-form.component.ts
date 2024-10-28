import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public productForm!: FormGroup;

  @Output() productAdded = new EventEmitter<Product>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      price: this.fb.control(0),
      checked: this.fb.control(false),
    });
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      const nouveauProduit: { price: any; name: string; checked: any; id: number } = {
        id: 0,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        checked: this.productForm.value.checked,
      };
      this.productAdded.emit(nouveauProduit);
      this.productForm.reset();  // Réinitialiser le formulaire après l'ajout
    }
  }
}
