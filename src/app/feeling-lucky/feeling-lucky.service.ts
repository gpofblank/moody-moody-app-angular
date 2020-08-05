import { Injectable } from '@angular/core';

import { Object } from '../shared/object.model'

@Injectable({
  providedIn: 'root'
})

export class FeelingLuckyService {
public  FeelingLuckyObjects: Object[] = [
  new Object ("FeelingLucky - Title1", "FeelingLucky - Desc1", "FeelingLucky - Pic1"),
  new Object ("FeelingLucky - Title2", "FeelingLucky - Desc2", "https://progeekzone.com/wp-content/uploads/2018/11/test1.jpg"),
  new Object ("FeelingLucky - Title3", "FeelingLucky - Desc3", "FeelingLucky - Pic3")
  ]
random: Object;

  constructor() { }

onGetRandom() {
return this.FeelingLuckyObjects[Math.floor(Math.random()*this.FeelingLuckyObjects.length)];
  }
}
