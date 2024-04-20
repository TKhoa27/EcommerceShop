import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements AfterViewInit {

  images: { src: string, name: string }[] = [
    { src: '../../../assets/image/about/Frame 560.png', name: 'Tom Cruise' },
    { src: '../../../assets/image/about/Frame 560.png', name: 'Emma Watson' },
  ];

  constructor() { }

  ngAfterViewInit(): void {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 100000, // Đặt thời gian mỗi slide hiển thị 
        disableOnInteraction: false // Tắt tự động chuyển slide khi người dùng tương tác với Swiper
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }


}
