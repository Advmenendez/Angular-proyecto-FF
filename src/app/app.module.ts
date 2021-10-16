import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './page/global/global.component';
import { NavComponent } from './page/global/nav/nav.component';
import { MainComponent } from './page/global/main/main.component';
import { CharactersComponent } from './page/global/characters/characters.component';
import { GamesComponent } from './page/global/games/games.component';
import { SonComponent } from './page/global/main/son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    NavComponent,
    MainComponent,
    CharactersComponent,
    GamesComponent,
    SonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
