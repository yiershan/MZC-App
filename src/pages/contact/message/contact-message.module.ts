import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {ContactMessagePage} from "./contact-message";

@NgModule({
  declarations: [
    ContactMessagePage
  ],
  imports: [
    IonicPageModule.forChild(ContactMessagePage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactMessagePage
  ]
})

export class ContactMessageModule{}
