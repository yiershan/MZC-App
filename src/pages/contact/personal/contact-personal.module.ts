import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {ContactPersonalPage} from "./contact-personal";

@NgModule({
  declarations: [
    ContactPersonalPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPersonalPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactPersonalPage
  ]
})

export class ContactPersonalModule{}
