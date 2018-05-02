import { Component } from '@angular/core';
import { IonicPage,NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'contact-more.html'
})

export class ContactMorePage {
  url;
  name;
  constructor(private navParams: NavParams) {
    this.url = this.navParams.get('url');
    this.name = this.navParams.get('name');
  }
}
