import { Component, OnInit, Input } from '@angular/core';

import { SuperAngryService } from './super-angry.service';

import { Router } from '@angular/router';

import { Object } from '../shared/object.model';


@Component({
  selector: 'app-super-angry',
  templateUrl: './super-angry.component.html',
  styleUrls: ['./super-angry.component.css']
})
export class SuperAngryComponent implements OnInit {
  randomObject: Object;
  ButtonNotClicked: boolean = true;

constructor(private superAngryService: SuperAngryService,
private router: Router) { }

ngOnInit() {
  }

  onSuperAngry() {
    this.randomObject = this.superAngryService.onGetRandom();
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onSuperAngryAgain() {
    this.randomObject = this.superAngryService.onGetRandom();
    this.ButtonNotClicked = this.ButtonNotClicked;
  }

  onBack() {
    this.randomObject = this.superAngryService.onGetRandom();
    this.ButtonNotClicked = !this.ButtonNotClicked;
  }

  onHome() {
    this.router.navigate(['./home']);  }
}
