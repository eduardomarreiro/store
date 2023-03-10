import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  public product!: Product;

  private loadProductDetails(): void {
    this.activetedRoute.params.subscribe(params => {
      this.storeService.getProductById(params['id'].toString()).subscribe({
        next: data => this.product = data,
        error: error => console.error(error)      
      });
    });
  }

  constructor(private activetedRoute : ActivatedRoute, private storeService: StoreService ) { }

  ngOnInit(): void {
    this.loadProductDetails();
  }

}
