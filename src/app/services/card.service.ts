import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable()
export class CardService {

  cards: Card [] = [
    new Card('History', 'history', '../../../../assets/img/img-hystory.jpg', 'One of the first examples of bicycles modified specifically for off-road use is the expedition of Buffalo Soldiers from Missoula, Montana to Yellowstone in August 1896. The Swiss military had its first bike regiment in 1891.'),
    new Card('Equipment', 'equipment', '../../../../assets/img/img-equipment.jpg', 'A bicycle helmet is designed to attenuate impacts to the head of a cyclist in falls while minimizing side effects such as interference with peripheral vision. There is ongoing scientific research into the degree of protection offered by bicycle helmets in the event of an accident, and on the effects of helmet wearing on cyclist and motor vehicle driver behaviour.'),
    new Card('Main Info', 'mtb info', '../../../../assets/img/img-facts.jpg', 'Mountain biking is the sport of riding bicycles off-road, often over rough terrain, using specially designed mountain bikes. Mountain bikes share similarities with other bikes, but incorporate features designed to enhance durability and performance in rough terrain.'),
  ];

  constructor() { }

  getCards () {
    return this.cards;
  }

}
