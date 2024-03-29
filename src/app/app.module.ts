import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './page-elements/navbar/navbar.component';
import { FooterComponent } from './page-elements/footer/footer.component';
import { HeaderComponent } from './page-elements/header/header.component';
import { ImageBrakeParallaxComponent } from './page-elements/image-brake-parallax/image-brake-parallax.component';
import { MainArticleComponent } from './page-elements/main-article/main-article.component';
import { HistoryComponent } from './pages/history/history.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { routes } from './app.routes';
import { CardsComponent } from './page-elements/cards/cards.component';
import { CardListComponent } from './page-elements/cards/card-list/card-list.component';
import { CardComponent } from './page-elements/cards/card-list/card.component';
import {CardService} from "./services/card.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ImageBrakeParallaxComponent,
    MainArticleComponent,
    HistoryComponent,
    EquipmentComponent,
    ContactComponent,
    HomeComponent,
    CardsComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
      routes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
