import { Component, OnInit, Input } from '@angular/core';

import { FeelingLuckyService } from '../feeling-lucky/feeling-lucky.service';
import { SuperAngryService } from '../super-angry/super-angry.service';
import { CheerMeUpService } from '../cheer-me-up/cheer-me-up.service';


import { Router } from '@angular/router';

import { Object } from '../shared/object.model';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

randomObject: Object;
ButtonNotClicked: boolean = true;
randomObjectFromAllArrays: Object[];

constructor(
private feelingLuckyService: FeelingLuckyService,
private superAngryService: SuperAngryService,
private cheerMeUpService: CheerMeUpService,
private router: Router) { }

  ngOnInit() {
    this.fillTheArray();
  }

  private fillTheArray() {
    this.randomObjectFromAllArrays = [
    this.feelingLuckyService.onGetRandom(),
    this.superAngryService.onGetRandom(),
    this.cheerMeUpService.onGetRandom()]
  }

  onRandom() {
    this.randomObject = this.randomObjectFromAllArrays[Math.floor(Math.random()*this.randomObjectFromAllArrays.length)];
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onRandomAgain() {
    this.fillTheArray();
    this.randomObject = this.randomObjectFromAllArrays[Math.floor(Math.random()*this.randomObjectFromAllArrays.length)];
    this.ButtonNotClicked = this.ButtonNotClicked;
  }

  onBack() {
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onHome() {
    this.router.navigate(['./home']);  }

}
