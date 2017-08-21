import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { TeamHomePage } from '../pages';
import { EliteApi } from "../../shared/shared";

@Component({
  templateUrl: 'teams.page.html',
})
export class teamsPage {

  private allTeams:any;
  private allTeamsDivision:any;
  teams = [];

  constructor(private nav: NavController,
     private navParams: NavParams,
    private eliteApi:EliteApi,
    private loadingController:LoadingController) {

  }

  ionViewDidLoad() {
    let selectedTourney =  this.navParams.data;

    let loader =this.loadingController.create({
    content:'Getting Data...'
    });

    loader.present().then(()=> {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data=> {
        this.allTeams = data.teams;
        this.allTeamsDivision =
        _.chain(data.teams)
          .groupBy('division')
          .toPairs()
          .map(item => _.zipObject(['divisionName','divisionTeams'], item))
          .value();

        this.teams = this.allTeamsDivision;
        loader.dismiss();
        });
    });
  }

  itemTapped($event, team) {
    this.nav.push(TeamHomePage, team);
  }

}
