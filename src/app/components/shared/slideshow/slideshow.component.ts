import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import Swiper from 'swiper';

import { PostsService } from '../../../services/posts.service';
import { IPosts } from '../../../models/Posts';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
    
  @Input() posts: IPosts;

  public mySwiper: Swiper;

  constructor( private postsService: PostsService ) {
    
  }

  ngOnInit(): void {
    this.postsService.getPosts()
        .subscribe(
          resp => {
            console.log(resp);
            // console.log(resp.title)
            this.posts = resp;
          },
          err => console.error(err)
        )
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay:{
        delay: 5000
      },
    });
  }

  onSlideNext() {
    this.mySwiper.slideNext();
  }

  onSlidePrev() {
    this.mySwiper.slidePrev();    
  }

}
