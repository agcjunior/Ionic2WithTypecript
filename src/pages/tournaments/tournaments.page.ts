import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamHomePage } from '../pages';
@Component({
  templateUrl: 'tournaments.page.html',
})
export class tournamentPage {

  constructor(private nav: NavController) {

  }

  itemTapped() {
    this.nav.push(TeamHomePage);
  }

}
