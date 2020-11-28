import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { PostsService } from '../../../services/posts.service';


import { IPosts } from '../../../models/Posts';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public posts: IPosts;

  constructor( private postsService: PostsService ) { }

  ngOnInit(): void {
    this.postsService.getPosts()
        .subscribe(
          resp => {
            console.log(resp)
            this.posts = resp;
          },
          err => console.log(err)
        )
  }

}
