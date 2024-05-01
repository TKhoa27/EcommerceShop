import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements AfterViewInit {

  images: { src: string, name: string }[] = [
    { src: '../../../assets/image/about/Category-Camera.png', name: 'CameraCategory' },
    { src: '../../../assets/image/about/Category-Computers.png', name: 'ComputersCategory' },
    { src: '../../../assets/image/about/Category-Gaming.png', name: 'GamingCategory' },
    { src: '../../../assets/image/about/Category-HeadPhone.png', name: 'HeadphoneCategory' },
    { src: '../../../assets/image/about/Category-Phone.png', name: 'PhoneCategory' },
    { src: '../../../assets/image/about/Category-SmartWatch.png', name: 'SmartwatchCategory' },
  ];

  ngAfterViewInit(): void {
    new Swiper("#swiper-categories", {
      slidesPerView: 5,
      spaceBetween: 25,
      autoplay: {
        delay: 500000000, // Đặt thời gian mỗi slide hiển thị 
        disableOnInteraction: false // Tắt tự động chuyển slide khi người dùng tương tác với Swiper
      },
      navigation: {
        nextEl: "#btn-next-categories",
        prevEl: "#btn-prev-categories",
      },
    });
  }
}
