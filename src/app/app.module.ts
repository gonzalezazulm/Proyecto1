import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { RadioComponent } from './pages/radio/radio.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    TeamComponent,
    ServicesComponent,
    AboutComponent,
    NotpagefoundComponent,
    FooterComponent,
    HeaderComponent,
    ProgramacionComponent,
    RadioComponent,
    FacebookComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
