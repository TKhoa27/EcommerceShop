import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedItem: number = 0; // Mặc định chọn phần tử đầu tiên
  menuItems: string[] = ['Home', 'Contact', 'About', 'Sign In'];
  urlKeyword: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/']); // Chuyển hướng đến trang Home khi component được khởi tạo
  }

  selectMenuItems(event: Event, index: number) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    this.selectedItem = index; // Cập nhật phần tử được chọn
    let item = this.menuItems[index];
    this.urlKeyword = '/' + item.toLowerCase().replace(/\s/g, '');
    this.router.navigate([this.urlKeyword]);
  }

}

