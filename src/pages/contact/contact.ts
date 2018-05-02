import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {GroupItem,Item} from "../../models/contact";
import {ContactMorePage} from "../pages";

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
        {name:"segmentfault", url:""},
        {name:"csdn", url:""},
        {name:"github", url:""}
      ]},
  ];

  constructor(public navCtrl: NavController
  ) { }
  itemSelected(item:Item){
    this.navCtrl.push(ContactMorePage, {
      name: item.name,
      url: item.url
    });
  }
}
