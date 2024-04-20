import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements AfterViewInit {

  images: { src: string, name: string, title: string }[] = [
    { src: '../../../assets/image/about/Frame 874.png', name: 'Tom Cruise', title: 'Founder & Chairman' },
    { src: '../../../assets/image/about/Frame 875.png', name: 'Emma Watson', title: 'Managing Director' },
    { src: '../../../assets/image/about/Frame 876.png', name: 'Will Smith', title: 'Product Designer' },
    { src: '../../../assets/image/about/Frame 875.png', name: 'Tom Cruise', title: 'Founder & Chairman' },
    { src: '../../../assets/image/about/Frame 876.png', name: 'Tom Cruise', title: 'Founder & Chairman' },
    { src: '../../../assets/image/about/Frame 874.png', name: 'Tom Cruise', title: 'Founder & Chairman' },
  ];

  constructor() { }

  ngAfterViewInit(): void {
    // Khởi tạo Swiper trong ngAfterViewInit
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 5000, // Đặt thời gian mỗi slide hiển thị (5 giây trong trường hợp này)
        disableOnInteraction: false // Tắt tự động chuyển slide khi người dùng tương tác với Swiper
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

}
