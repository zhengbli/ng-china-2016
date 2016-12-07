import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Thumbs } from './thumbs/thumbs.component';

import { FoodStore } from './food_store';

@NgModule({
  declarations: [
    AppComponent,
    Thumbs
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FoodStore],
  // Replace with AppComponent for initial state of the demo.
  bootstrap: [AppComponent]
})
export class AppModule { }
