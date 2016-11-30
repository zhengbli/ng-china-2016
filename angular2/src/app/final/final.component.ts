import { Component } from '@angular/core';
import { ItemStoreService } from '../item-store.service';
import { ThumbChangeEvent } from '../thumbs/thumbs.component';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html'
})
export class FinalComponent {
  items: string[];
  totalLikes = 0;

  constructor(itemStore: ItemStoreService) {
    itemStore.getItems().then(i => this.items = i);
  }

  onChange(event: ThumbChangeEvent) {
    this.totalLikes += event.upDiff;
    this.totalLikes -= event.downDiff;
  }
}
