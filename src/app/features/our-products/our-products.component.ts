import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements AfterViewInit {

  images: { src: string, name: string }[] = [
    { src: '../../../assets/image/keyboard/Asus Laptop.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Canon camera.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Cooler liqid.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/GP11 Shooter.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Havit Hv-G92.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Keyboard Ak-900.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/MSI Monitor.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Havit Hv-G92.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Keyboard Ak-900.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/MSI Monitor.png', name: 'Tom Cruise' },


  ];

  ngAfterViewInit(): void {
    new Swiper("#swiper-our-products", {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
      autoplay: {
        delay: 500000000, // Đặt thời gian mỗi slide hiển thị 
        disableOnInteraction: false // Tắt tự động chuyển slide khi người dùng tương tác với Swiper
      },
      navigation: {
        nextEl: "#btn-next-our-products",
        prevEl: "#btn-prev-our-products",
      },
    });

  }
}
