import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {ContactWorkPage} from "./contact-work";

@NgModule({
  declarations: [
    ContactWorkPage
  ],
  imports: [
    IonicPageModule.forChild(ContactWorkPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactWorkPage
  ]
})

export class ContactWorkModule{}
