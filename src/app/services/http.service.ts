import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

    getPokemons(){
      return this.http.get('https://pokeapi.co/api/v2/pokemon')
    }

    getCategories() {
      let categories = [];
  
      let cat1: ICategory = {
        id: 1,
        name: 'Feminina',
        image: '../../assets/products/feminina-categoria.webp'
      }
      let cat2: ICategory = {
        id: 2,
        name: 'Masculino',
        image: '../../assets/products/masculino.webp'
      }
      let cat3: ICategory = {
        id: 3,
        name: 'Kids',
        image: '../../assets/products/Em-breve.png'
      }
  
      categories.push(cat1, cat2, cat3);
  
      return categories;
    }

    getFeaturedProducts() {
      let products = [];
  
      let prod1: IProduct = {
        id: 1,
        name: 'Blusas Femininas',
        price: 55.00,
        image: '../../assets/products/womens-tshirt.webp'
      }
      let prod2: IProduct = {
        id: 2,
        name: 'Blusas Masculinas',
        price: 34.99,
        image: '../../assets/products/mens-tshirt.jpeg'
      }
      let prod3: IProduct = {
        id: 1,
        name: 'Blusas Femininas',
        price: 40.00,
        image: '../../assets/products/women-tshirt.webp'
      }
  
      products.push(prod1, prod2, prod3);
  
      return products;
    }

    getBestSellProducts() {
      let products = [];
  
      let prod1: IProduct = {
        id: 1,
        name: 'Camisa Nike Polo',
        price: 90.00,
        image: '../../assets/products/camisa-nike.webp'
      }
      let prod2: IProduct = {
        id: 2,
        name: 'Camisa Thommy Hilfiger',
        price: 89.90,
        image: '../../assets/products/camisa-thomy.webp'
      }
      let prod3: IProduct = {
        id: 1,
        name: 'Conjunto Feminino',
        price: 79.90,
        image: '../../assets/products/conjunto-feminino.jpg'
      }
  
      products.push(prod1, prod2, prod3);
  
      return products;
    }


}
