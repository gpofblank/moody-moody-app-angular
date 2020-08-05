import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheerMeUpComponent } from './cheer-me-up/cheer-me-up.component';
import { SuperAngryComponent } from './super-angry/super-angry.component';
import { RandomComponent } from './random/random.component';
import { FeelingLuckyComponent } from './feeling-lucky/feeling-lucky.component';
import { ContributeComponent } from './contribute/contribute.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CheerMeUpComponent,
    SuperAngryComponent,
    RandomComponent,
    FeelingLuckyComponent,
    ContributeComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
