import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { myTeamsPage, teamsPage } from '../pages';
import {EliteApi} from '../../shared/shared';

@Component({
  templateUrl: 'tournaments.page.html',
})
export class tournamentPage {

  tournaments:any;

  constructor(private nav: NavController,
     private eliteApi : EliteApi,
     private loadingController:LoadingController) {

  }

  itemTapped($event, tourney) {
    this.nav.push(teamsPage, tourney);
  }

  ionViewDidLoad() {
    let loader= this.loadingController.create({
      content:'Getting tournaments',
      spinner:'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
      this.tournaments = data;
      loader.dismiss();
      });
    });
  }

}
