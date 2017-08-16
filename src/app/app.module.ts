import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LibraryPage } from "../pages/library/library";
import { QuotesPage } from "../pages/quotes/quotes";
import { FavoritesPage } from "../pages/favorites/favorites";
import { SettingsPage } from "../pages/settings/settings";
import { QuotePage } from "../pages/quote/quote";
import { TabsPage } from "../pages/tabs/tabs";
import {QuoteService} from '../service/quote';
import { SettingService } from "../service/settings";

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    QuotesPage,
    FavoritesPage,
    SettingsPage,
    QuotePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    QuotesPage,
    FavoritesPage,
    SettingsPage,
    QuotePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuoteService,
    SettingService
  ]
})
export class AppModule {}
