import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {BlogApi, BlogQuery, BlogListDto} from "../../../providers/blog/blog-api";

@IonicPage()
@Component({
  templateUrl: 'blog.html'
})

export class BlogPage {
  data: BlogListDto;
  constructor(private api: BlogApi,
              public navCtrl: NavController) {
    this.data = new BlogListDto();
    this.api.getBlogList(new BlogQuery()).subscribe(r => {
      this.data = r;
    })
  }

}
