import { Injectable } from '@angular/core';

import { Object } from '../shared/object.model'


@Injectable({
  providedIn: 'root'
})
export class SuperAngryService {
  public  SuperAngryObjects: Object[] = [
  new Object ("SuperAngry - title1", "SuperAngry - desc1", "SuperAngry - pic1"),
  new Object ("SuperAngry - title2", "SuperAngry - desc2", "https://progeekzone.com/wp-content/uploads/2018/11/test1.jpg"),
  new Object ("SuperAngry - title3", "SuperAngry - desc3", "SuperAngry - pic3")
    ]
  random: Object;

    constructor() { }

  onGetRandom() {
  return this.SuperAngryObjects[Math.floor(Math.random()*this.SuperAngryObjects.length)];
    }
  }
