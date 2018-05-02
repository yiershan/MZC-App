import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {GroupItem,Item} from "../../models/contact";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  templateUrl: 'contact.html'
})
export class ContactPage{
  apps: GroupItem[] = [
    {name: '个人信息',
      items:[
        {name:"基本信息", url:''},
        {name:"工作履历", url:""},
        {name:"人生信仰", url:""},
        {name:"我的自传", url:""},
        {name:"留言", url:""},
      ]},
    {name: '更多内容',
      items:[
        {name:"简书", url:"https://www.jianshu.com/u/8afb7e623b70"},
        {name:"segmentfault", url:"https://segmentfault.com/u/yiqrshan"},
        {name:"csdn", url:"https://blog.csdn.net/yiershan1314"},
        {name:"github", url:"https://github.com/yiershan"}
      ]},
  ];

  constructor(private iab: InAppBrowser
  ) { }
  itemSelected(item:Item){
    const browser = this.iab.create(item.url,'_self');
    browser.show();
   // browser.executeScript(...);

   // browser.insertCSS(...);
   //  browser.on('loadstop').subscribe(event => {
   //    browser.insertCSS({ code: "body{color: red;" });
   //  });

   // browser.close();
  }
}
