import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {ContactBasePage} from "./contact-base";

@NgModule({
  declarations: [
    ContactBasePage
  ],
  imports: [
    IonicPageModule.forChild(ContactBasePage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactBasePage
  ]
})

export class ContactBaseModule{}
