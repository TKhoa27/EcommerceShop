import { Component, OnInit } from '@angular/core';
import { ProductService } from './core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Electric';
  data: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productService.getData().subscribe((res) => {
      this.data = res
      console.log(this.data);
    })
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }

}