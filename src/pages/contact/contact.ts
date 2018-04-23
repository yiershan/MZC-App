import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Nav } from 'ionic-angular';
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
    {name: '联系方式',
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
export class GroupItem{
  name:string;
  items:Item[];
}
export  class Item{
  name:string;
  url:any;
}
