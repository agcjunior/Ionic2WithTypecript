import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { myTeamsPage } from '../pages';

@Component({
  templateUrl: 'team-detail.page.html',
})
export class teamDetailPage {

  team: any;
  constructor(private nav: NavController, private navParams:NavParams) {
    this.team =this.navParams.data;
    console.log('**nav params:', this.navParams);
  }



}
