import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { myTeamsPage, tournamentPage, TeamHomePage, teamsPage, StandingsPage, teamDetailPage } from '../pages/pages';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    myTeamsPage,
    teamsPage,
    tournamentPage,
    TeamHomePage,
    StandingsPage,
    teamDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    myTeamsPage,
    teamsPage,
    tournamentPage,
    StandingsPage,
    TeamHomePage,
    teamDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
