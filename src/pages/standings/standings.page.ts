import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from "../../shared/shared";
import * as _ from 'lodash';

@Component({
  templateUrl: 'standings.page.html',
})
export class StandingsPage {
  standings: any[];
  team:any;
  allStandings:any[];

  constructor(private nav: NavController,
              private navParams:NavParams,
              private eliteApi: EliteApi) {

  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings =
      _.chain(this.standings)
      .groupBy('division')
      .toPairs()
      .map(item => _.zipObject(['divisionName','divisionStandings'], item))
      .value();

      console.log('standings:', this.standings);
      console.log('division standings',this.allStandings);
  }

}
