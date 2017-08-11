import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { myTeamsPage, teamsPage } from '../pages';
import {EliteApi} from '../../shared/shared';

@Component({
  templateUrl: 'tournaments.page.html',
})
export class tournamentPage {

  tournaments:any;

  constructor(private nav: NavController, private eliteApi : EliteApi) {

  }

  itemTapped($event, tourney) {
    this.nav.push(teamsPage, tourney);
  }

  ionViewDidLoad() {
    this.eliteApi.getTournaments().then(data => this.tournaments = data);

  }

}
