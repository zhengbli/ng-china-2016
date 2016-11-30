import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinalComponent } from './final/final.component';
import { Thumbs } from './thumbs/thumbs.component';

import { ItemStoreService } from './item-store.service';

@NgModule({
  declarations: [
    AppComponent,
    FinalComponent,
    Thumbs
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemStoreService],
  // Replace with AppComponent for initial state of the demo.
  bootstrap: [AppComponent]
})
export class AppModule { }
