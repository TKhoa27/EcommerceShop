import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-flash-sales',
  templateUrl: './flash-sales.component.html',
  styleUrls: ['./flash-sales.component.scss']
})
export class FlashSalesComponent implements AfterViewInit {
  images: { src: string, name: string }[] = [
    { src: '../../../assets/image/keyboard/Asus Laptop.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Canon camera.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Cooler liqid.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/GP11 Shooter.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Havit Hv-G92.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/Keyboard Ak-900.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/keyboard/MSI Monitor.png', name: 'Tom Cruise' },


  ];

  ngAfterViewInit(): void {
    new Swiper("#swiper-flashsale", {
      slidesPerView: 4,
      spaceBetween: 25,
      autoplay: {
        delay: 500000000, // Đặt thời gian mỗi slide hiển thị 
        disableOnInteraction: false // Tắt tự động chuyển slide khi người dùng tương tác với Swiper
      },
      navigation: {
        nextEl: "#btn-next-flashsale",
        prevEl: "#btn-prev-flashsale",
      },
    });
  }

}
