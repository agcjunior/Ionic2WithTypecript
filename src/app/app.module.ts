import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { myTeamsPage, tournamentPage, TeamHomePage, teamsPage, StandingsPage, teamDetailPage, gamePage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EliteApi } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    myTeamsPage,
    teamsPage,
    tournamentPage,
    TeamHomePage,
    StandingsPage,
    teamDetailPage,
    gamePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    teamDetailPage,
    gamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
