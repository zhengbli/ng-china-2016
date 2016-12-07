import { Injectable } from '@angular/core';

@Injectable()
export class FoodStore {

  private foods = ['北京烤鸭','小笼包','桂林米饭'];
  
  getFoods(): Promise<string[]> {
    return Promise.resolve(this.foods);
  }
}
