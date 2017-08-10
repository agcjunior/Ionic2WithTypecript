import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { tournamentPage } from'../pages';

@Component({
  templateUrl: 'myteams.page.html',
})
export class myTeamsPage {

  constructor(private nav: NavController) {
  }

  goToTournaments() {
    this.nav.push(tournamentPage);
  }
}
