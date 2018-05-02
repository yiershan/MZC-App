import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {BlogDetailPage} from "./blog-detail";

@NgModule({
  declarations: [
    BlogDetailPage
  ],
  imports: [
    IonicPageModule.forChild(BlogDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    BlogDetailPage
  ]
})

export class BlogDetailModule{}
