import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.scss']
})
export class BestSellingComponent implements AfterViewInit {

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
    new Swiper("#swiper-bestsell", {
      slidesPerView: 4,
      spaceBetween: 25,
    });
  }

}
