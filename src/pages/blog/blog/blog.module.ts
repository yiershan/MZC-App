import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {BlogPage} from "./blog";

@NgModule({
  declarations: [
    BlogPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogPage),
    TranslateModule.forChild()
  ],
  exports: [
    BlogPage
  ]
})

export class BlogModule{}
