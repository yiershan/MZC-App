import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {BlogApi, GetNoteDto, PagedData, PreNoteDto} from "../../../providers/blog/blog-api";
import {LoadingController} from "ionic-angular";
import {BlogDetailPage} from "../../pages";

@IonicPage()
@Component({
  templateUrl: 'blog.html'
})

export class BlogPage {
  query: GetNoteDto;
  data: PagedData<PreNoteDto>;
  constructor(private api: BlogApi,
              public loadCtrl: LoadingController,
              public navCtrl: NavController) {
    this.data = new PagedData<PreNoteDto>();
    this.query = new GetNoteDto();
    this.load(true);
  }
  load(f = false) {
    const loading  = this.loadCtrl.create({
      content: 'Please wait...'
    });
    if(f){
      this.query.SkipCount = 0;
      this.data = new PagedData<PreNoteDto>();
    }else {
      this.query.SkipCount = this.data.items.length;
    }
    loading.present();
    this.api.GetNoteList(this.query).subscribe(r => {
      this.data.items.push(...r.items);
      this.data.totalCount = r.totalCount;
      console.log(this.data);
      loading.dismiss();
    }, () => {
      loading.dismiss();
      console.log(this.data);
    })
  }
  search(ev) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.query.key = val;
    }else {
      this.query.key = '';
    }
    this.load(true);
  }
  get showMore() {
    return this.data.totalCount>this.data.items.length;
  }
  go(id) {
    this.navCtrl.push(BlogDetailPage, {
      id: id
    });
  }
}
