import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StandingsPage, teamDetailPage } from'../pages';
@Component({
  templateUrl: 'team-home.page.html',
})
export class TeamHomePage {

  teamDetailTab =teamDetailPage;
  standingsTab= StandingsPage;

  constructor(private nav: NavController) {

  }

}
