import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/card';
import { CardService } from '../../../services/card.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

}
