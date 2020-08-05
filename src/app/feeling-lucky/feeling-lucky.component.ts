import { Component, OnInit, Input } from '@angular/core';

import { FeelingLuckyService } from './feeling-lucky.service';

import { Router } from '@angular/router';

import { Object } from '../shared/object.model';

@Component({
  selector: 'app-feeling-lucky',
  templateUrl: './feeling-lucky.component.html',
  styleUrls: ['./feeling-lucky.component.css']
})
export class FeelingLuckyComponent implements OnInit {
  randomObject: Object;
  ButtonNotClicked: boolean = true;

constructor(private feelingLuckyService: FeelingLuckyService,
private router: Router) { }

ngOnInit() {
  }

  onFeelingLucky() {
    this.randomObject = this.feelingLuckyService.onGetRandom();
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onFeelingLuckyAgain() {
    this.randomObject = this.feelingLuckyService.onGetRandom();
    this.ButtonNotClicked = this.ButtonNotClicked;
  }

  onBack() {
    this.randomObject = this.feelingLuckyService.onGetRandom();
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onHome() {
    this.router.navigate(['./home']);  }
}
