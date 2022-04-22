import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { RadioComponent } from './pages/radio/radio.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'team', component: TeamComponent},
  {path:'services', component: ServicesComponent},
  {path:'contact', component: ContactComponent},
  {path:'programacion', component: ProgramacionComponent},
  {path:'radio', component: RadioComponent},
  {path:'facebook', component:FacebookComponent},
  {path:'youtube', component:YoutubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
