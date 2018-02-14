import { Collectable } from './collectable.model';

export class CollectableService {
  private collectables: Collectable [] = [
    {description: 'learn Linux', type: 'Book'},
    {description: 'Photo of new york city', type: 'Photo'},
    {description: 'garbage trash ', type: 'Garbage'},
    {description: 'piece of paper', type: 'Paper'}
  ];

  private collection: Collectable [] = [];

  getCollectables() {
    return this.collectables;
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}

