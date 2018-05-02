import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {ContactMorePage} from "./contact-more";

@NgModule({
  declarations: [
    ContactMorePage
  ],
  imports: [
    IonicPageModule.forChild(ContactMorePage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactMorePage
  ]
})

export class ContactMoreModule{}
