import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CodePush } from '@ionic-native/code-push';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private codePush: CodePush) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
		statusBar.styleDefault();
		splashScreen.hide();

		this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));

		const downloadProgress = (progress) => { console.log('Downloaded ${progress.receivedBytes} of ${progress.totalBytes}'); }
		this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));
    });
  }
}

