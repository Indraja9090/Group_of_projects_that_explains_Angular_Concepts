import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {
      id: 1,
      name: "Minimalist Analog Watch",
      price: 109,
      color: "Black",
      available: "Available",
      image: "/assets/products/watch-product.jpg"
    },
    {
      id: 2,
      name: "Apple iPhone 12",
      price: 80000,
      color: "Purple",
      available: "Not Available",
      image: "/assets/products/iphone-product.jpg"
    },
    {
      id: 3,
      name: "Samsung Smart Tv",
      price: 30000,
      color: "Black",
      available: "Available",
      image: "/assets/products/smarttv-product.jpg"
    },
    {
      id: 4,
      name: "Bosh Washing Machine",
      price: 42000,
      color: "White",
      available: "Available",
      image: "/assets/products/washingmachine-product.jpg"
    },
    {
      id: 5,
      name: "LG Refrigerator",
      price: 35000,
      color: "Gray",
      available: "Not Available",
      image: "/assets/products/refrigerator-product.jpg"
    },

  ]

}
