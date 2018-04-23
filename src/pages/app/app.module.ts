import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {MyAppPage} from "./app";
@NgModule({
  declarations: [
    MyAppPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAppPage),
    TranslateModule.forChild()
  ],
  exports: [
    MyAppPage
  ]
})

export class MyAppModule{}
