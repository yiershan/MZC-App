import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {BlogApi, PreNoteDto} from "../../../providers/blog/blog-api";

@IonicPage()
@Component({
  templateUrl: 'index.html'
})

export class BlogDetailPage {
  article: PreNoteDto;
  _like = false;
  State = "";
  id;
  constructor(private api: BlogApi,
              private navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.load();
    this.article = new PreNoteDto();
  }

  load() {
    this.api.GetNote(this.id).subscribe(r => {
      this.article = r;
    });
  }

  ILike() {
    this._like = !this._like;
    if (this._like) {
      this.article.like++;
      this.State = "Bubble";
      this.api.Like(this.article.id);
    } else {
      this.article.like--;
      this.State = "UnBubble";
      this.api.UnLike(this.article.id);
    }
  }
}
