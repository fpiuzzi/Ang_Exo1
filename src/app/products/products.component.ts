import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  produitsTrouves: Product[] = [];
  keyword : string= "";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void {
    this.products = this.productService.getProduits();
  }

  handleCheckProduct(product: Product): void {
    const produit = this.productService.recupererProduitParId(product.id);
    if (produit) {
      alert(`Produit trouvé : ${produit.name}, Prix: ${produit.price}`);
    } else {
      alert('Produit non trouvé');
    }
  }

  rechercherProduitParNom(): void {
    const produit = this.productService.rechercherProduitParNom(this.keyword);
    if (produit) {
      alert(`Produit trouvé : ${produit.name}, Prix: ${produit.price}`);
    } else {
      alert('Produit non trouvé');
    }
    this.getProducts();
  }

  handleDelete(product: Product): void {
    if (confirm('Etes vous sûre?')) {
      this.productService.supprimerProduit(product.id);
    }
    this.getProducts();
  }
  searchProducts() {
    this.products = this.productService.rechercherProduit(this.keyword);
  }

  handleProductAdded(product: Product): void {
    this.productService.ajouterProduit(product);
    this.getProducts();
  }
}
