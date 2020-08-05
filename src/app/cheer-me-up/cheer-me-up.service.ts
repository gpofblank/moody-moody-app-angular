import { Injectable } from '@angular/core';

import { Object } from '../shared/object.model'

@Injectable({
  providedIn: 'root'
})
export class CheerMeUpService {
public  CheerMeUpObjects: Object[] = [
new Object ("CheerMeUp - Title1", "CheerMeUp - Desc1", "CheerMeUp - Pic1"),
new Object ("CheerMeUp - Title2", "CheerMeUp - Desc2", "https://progeekzone.com/wp-content/uploads/2018/11/test1.jpg"),
new Object ("CheerMeUp - Title3", "CheerMeUp - Desc3", "CheerMeUp - Pic3")
  ]
random: Object;

  constructor() { }

onGetRandom() {
return this.CheerMeUpObjects[Math.floor(Math.random()*this.CheerMeUpObjects.length)];
  }
}
