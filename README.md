# 手机端

## 环境要求

## 使用

> 浏览器运行

```
ionic serve
```

> 生成apk

```
ionic cordova build android --prod --release
```

> 创建签名密钥

如果没有签名的话
```
keytool -genkey -v -keystore 密钥名称 -alias 别名 -keyalg RSA -keysize 2048 -validity 10000

```
>  签名

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore 密钥名称 apk的名称 别名
```

## <a name="getting-started"></a>Getting Started

To test this starter out, install the latest version of the Ionic CLI and run:

```bash
ionic start mySuperApp super
```

## Pages

The Super Starter comes with a variety of ready-made pages. These pages help
you assemble common building blocks for your app so you can focus on your
unique features and branding.

The app loads with the `FirstRunPage` set to `TutorialPage` as the default. If
the user has already gone through this page once, it will be skipped the next
time they load the app.

If the tutorial is skipped but the user hasn't logged in yet, the Welcome page
will be displayed which is a "splash" prompting the user to log in or create an
account.

Once the user is authenticated, the app will load with the `MainPage` which is
set to be the `TabsPage` as the default.

The entry and main pages can be configured easily by updating the corresponding
variables in
[src/pages/pages.ts](https://github.com/ionic-team/starters/blob/master/ionic-angular/official/super/src/pages/pages.ts).

Please read the
[Pages](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/super/src/pages)
readme, and the readme for each page in the source for more documentation on
each.

## Providers

The Super Starter comes with some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that you will need to configure.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete 

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify
`translate.use('en')` to use the LANGCODE from `src/assets/i18n/`
