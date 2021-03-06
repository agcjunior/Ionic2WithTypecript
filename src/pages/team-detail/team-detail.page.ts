import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { myTeamsPage, gamePage } from '../pages';
import * as _ from 'lodash';
import moment from 'moment';
import { EliteApi } from'../../shared/shared';

@Component({
  templateUrl: 'team-detail.page.html',
})
export class teamDetailPage {
  dateFilter:string;
  allGames: any[];
  games: any[];
  team: any;
  teamStanding: any;
  private tourneyData:any;

  constructor(private nav: NavController,
     private navParams:NavParams,
     private eliteApi: EliteApi) {
  }

ionViewDidLoad(){
  this.team =this.navParams.data;
  this.tourneyData = this.eliteApi.getCurrentTourney();

  this.games = _.chain(this.tourneyData.games)
                .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                .map(g => {
                  let isTeam1 = (g.team1Id === this.team.id);
                  let opponentName = isTeam1 ? g.team2 : g.team1;
                  let scoreDisplay =this.getScoreDisplay(isTeam1,g.team1Score,g.team2Score);

                  return {
                    gameId:g.id,
                    opponent:opponentName,
                    time:Date.parse(g.time),
                    location:g.location,
                    locationUrl:g.locationUrl,
                    scoreDisplay:scoreDisplay,
                    homeAway: (isTeam1 ? "vs." : "at")
                  };
                })
                .value();
  this.teamStanding = _.find(this.tourneyData.standings, {'teamId':this.team.id});
  this.allGames =this.games;
}

  getScoreDisplay(isTeam1, team1Score, team2Score)
  {
    if (team1Score && team2Score){
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore?"W: ":"L: ";
      return winIndicator + teamScore + "-" + opponentScore;
    } else {
      return  "";
    }
  }

  gameClicked($event, game){
    let sourceGame = this.tourneyData.games.find(g=>g.id === game.gameId);
    this.nav.parent.parent.push(gamePage, sourceGame);
  }

  dateChanged(){
    this.games =_.filter(this.allGames, g=> moment(g.time).isSame(this.dateFilter,'day'));
  }

}
