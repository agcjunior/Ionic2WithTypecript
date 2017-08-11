import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StandingsPage, teamDetailPage, myTeamsPage } from'../pages';
@Component({
  templateUrl: 'team-home.page.html',
})
export class TeamHomePage {

  team: any;
  teamDetailTab =teamDetailPage;
  standingsTab= StandingsPage;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
  }

  goHome() {
    //this.nav.push(myTeamsPage);
    this.nav.popToRoot();
  }
}
