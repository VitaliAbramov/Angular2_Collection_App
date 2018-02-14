import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {
  collectibles = [
    {description: 'learn Linux', type: 'Book'},
    {description: 'Photo of new york city', type: 'Photo'},
    {description: 'garbage trash ', type: 'Garbage'},
    {description: 'piece of paper', type: 'Paper'}
  ];

  onAddToCollection() {
    alert('hello')
  }
  constructor() { }

  ngOnInit() { }

}
