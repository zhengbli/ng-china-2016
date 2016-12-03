import { Injectable } from '@angular/core';

@Injectable()
export class ItemStoreService {

  foods = ['北京烤鸭','小笼包','桂林米饭'];
  
  getItems(): Promise<string[]> {
    return Promise.resolve(this.foods);
  }
}
