import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {GroupItem, Item} from "../../models/contact";

@IonicPage()
@Component({
  templateUrl: 'app.html'
})
export class MyAppPage{
  apps: GroupItem[] = [
    {name: '应用',
      items:[
        {name:"记账", url:''},
        {name:"时间账单", url:""},
        {name:"电影抢先看", url:""},
        {name:"音乐", url:""},
        {name:"测试", url:""}
      ]},
    {name: '文章',
      items:[
        {name:"博客", url:""}
      ]},
    {name: '图片',
      items:[
        {name:"菜谱", url:""},
        {name:"生活", url:""}
      ]},
  ];

  constructor(
    public nav: Nav,
  ) { }
  itemSelected(item:Item){
    this.nav.setRoot(item.url);
  }
}
