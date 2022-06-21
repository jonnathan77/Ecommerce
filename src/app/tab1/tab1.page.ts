import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  constructor(
    private httpService: HttpService,

  ) {}

  ngOnInit() {
    this.categories = this.httpService.getCategories();
    this.featuredProducts = this.httpService.getFeaturedProducts();
    this.bestSellProducts = this.httpService.getBestSellProducts();
  }

}
