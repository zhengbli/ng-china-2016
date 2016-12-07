import { Component } from '@angular/core';
import {} from './thumbs/thumbs.component';
import {} from './food_store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods: string[];
}
