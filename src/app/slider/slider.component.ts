import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/images/banner3.jpg', '../../assets/images/banner-2.jpg', '../../assets/images/banner4.jpg'];
}
