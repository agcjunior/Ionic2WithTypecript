import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { tournamentPage, TeamHomePage } from '../pages';
import { EliteApi } from "../../shared/shared";

@Component({
  selector:'myTeams',
  templateUrl: 'myteams.page.html',
})
export class myTeamsPage {

  favorites = [
    {
      team:{"id": 829, "name": "Baltimore Stars", "coach": "James"},
      tournamentId: "46ebd526-8839-476a-9ba0-8a9b2c07f3c3",
      tournamentName:"Summer Showdown"
    },
    {
      team:{"id": 842, "name": "DC Assault", "coach": "Bartlett"},
      tournamentId: "46ebd526-8839-476a-9ba0-8a9b2c07f3c3",
      tournamentName:"Summer Showdown"
    }
  ];

  constructor(private nav: NavController,
      private loadingController: LoadingController,
      private eliteApi:EliteApi) {
  }

  goToTournaments() {
    this.nav.push(tournamentPage);
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content:"Getting Data...",
      dismissOnPageChange:true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
    .subscribe(t=> this.nav.push(TeamHomePage, favorite.team));
  }
}
