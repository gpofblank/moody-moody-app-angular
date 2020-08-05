import { Component, OnInit, Input } from '@angular/core';

import { CheerMeUpService } from './cheer-me-up.service';

import { Router } from '@angular/router';

import { Object } from '../shared/object.model';

@Component({
  selector: 'app-cheer-me-up',
  templateUrl: './cheer-me-up.component.html',
  styleUrls: ['./cheer-me-up.component.css']
})
export class CheerMeUpComponent implements OnInit {
randomObject: Object;
ButtonNotClicked: boolean = true;

constructor(private cheerMeUpService: CheerMeUpService,
private router: Router) { }

ngOnInit() {
  }

  onCheerMeUp() {
    this.randomObject = this.cheerMeUpService.onGetRandom();
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onCheerMeUpAgain() {
    this.randomObject = this.cheerMeUpService.onGetRandom();
    this.ButtonNotClicked = this.ButtonNotClicked;
  }

  onBack() {
    this.randomObject = this.cheerMeUpService.onGetRandom();
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onHome() {
    this.router.navigate(['./home']);  }
}
