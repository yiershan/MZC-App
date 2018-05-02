import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {ContactFaithPage} from "./contact-faith";

@NgModule({
  declarations: [
    ContactFaithPage
  ],
  imports: [
    IonicPageModule.forChild(ContactFaithPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactFaithPage
  ]
})

export class ContactFaithModule{}
