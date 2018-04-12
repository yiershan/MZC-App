import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage, MainPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import {Storage} from "@ionic/storage";
import {MyConfig} from "../providers/config/config";

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    // { title: 'Tutorial', component: 'TutorialPage' },
    // { title: 'Welcome', component: 'WelcomePage' },
    // { title: 'Tabs', component: 'TabsPage' },
    // { title: 'Cards', component: 'CardsPage' },
    // { title: 'Content', component: 'ContentPage' },
    // { title: 'Login', component: 'LoginPage' },
    // { title: 'Signup', component: 'SignupPage' },
    // { title: 'Master Detail', component: 'ListMasterPage' },
    // { title: 'Menu', component: 'MenuPage' },
    // { title: 'Settings', component: 'SettingsPage' },
    // { title: 'Search', component: 'SearchPage' }
  ];

  constructor(private translate: TranslateService,
              platform: Platform,
              settings: Settings,
              private config: Config,
              private storage: Storage,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // 查看是否浏览过导航页
      this.storage.get(MyConfig.TUTORIAL_SHOW).then( TUTORIAL_SHOW => {
        this.rootPage = TUTORIAL_SHOW === true ? MainPage: FirstRunPage;
      });
      // Okay, so the platform is ready and our plugins are available.
      // 平台加载完毕， 插件可用
      // Here you can do any higher level native things you might need.
      // 现在可以做一些你需要的高级操作
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  /**
   * 根据浏览器语言设置本地化语言
   * \assets\i18n
   */
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('zh-cmn-Hans');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        this.translate.use('zh-cmn-Hans'); // 繁体字也不用
        // const browserCultureLang = this.translate.getBrowserCultureLang();
        //
        // if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
        //   this.translate.use('zh-cmn-Hans');
        // } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
        //   this.translate.use('zh-cmn-Hant');
        // }
      } else { // 不是中文设置成英文挺好，省的改太多
        this.translate.use('en');
      }
    } else {
      this.translate.use('zh-cmn-Hans'); // Set your language here 默认语言
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
