import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EventsComponent } from './components/events/events.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DegreesComponent } from './components/degrees/degrees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    ExperienceComponent,
    EventsComponent,
    ContactsComponent,
    SkillsComponent,
    DegreesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
