import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheerMeUpComponent } from './cheer-me-up/cheer-me-up.component';
import { SuperAngryComponent } from './super-angry/super-angry.component';
import { RandomComponent } from './random/random.component';
import { FeelingLuckyComponent } from './feeling-lucky/feeling-lucky.component';
import { ContributeComponent } from './contribute/contribute.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cheer-me-up', component: CheerMeUpComponent },
  { path: 'i-am-super-angry', component: SuperAngryComponent },
  { path: 'random', component: RandomComponent },
  { path: 'feeling-lucky', component: FeelingLuckyComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'cheer-me-up', component: CheerMeUpComponent },
//   { path: 'i-am-super-angry', component: SuperAngryComponent },
//   { path: 'random', component: RandomComponent },
//   { path: 'feeling-lucky', component: FeelingLuckyComponent },
//   { path: 'contribute', component: ContributeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
// ]
