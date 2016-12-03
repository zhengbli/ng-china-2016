import {Component, EventEmitter, Output} from '@angular/core';

export enum ThumbState {
  UP,
  DOWN,
  NONE
}

/**
 * Component for displaying "thumbs up" / "thumbs down" buttons for a video
 * (search result).
 */
@Component({
  selector: 'vote-thumbs',
  templateUrl: './thumbs.ng.html',
  styleUrls: ['./thumbs.css']
})
export class Thumbs {
  state: ThumbState = ThumbState.NONE;
  @Output() change = new EventEmitter();

  // Templates can't access static value, so we redirect as follows.
  get UP_T() { return ThumbState.UP; }
  get DOWN_T() { return ThumbState.DOWN; }
  get NONE_T() { return ThumbState.NONE; }

  onClick(newState: ThumbState) {
    if (newState === this.state) newState = ThumbState.NONE;
    let oldState = this.state;
    this.state = newState;
    this.change.emit(new ThumbChangeEvent(oldState, newState));
  }

  reset() { this.state = ThumbState.NONE; }
}

export class ThumbChangeEvent {
  upDiff: number;
  downDiff: number;
  constructor(oldState: ThumbState, newState: ThumbState) {
    this.upDiff = ThumbChangeEvent.computeUpDiff(oldState, newState),
    this.downDiff = ThumbChangeEvent.computeDownDiff(oldState, newState);
  }

  static computeUpDiff(oldState: ThumbState, newState: ThumbState) {
    if (oldState === ThumbState.NONE && newState === ThumbState.UP) return 1;
    if (oldState === ThumbState.NONE && newState === ThumbState.DOWN) return 0;
    if (oldState === ThumbState.DOWN && newState === ThumbState.UP) return 1;
    if (oldState === ThumbState.UP && newState === ThumbState.DOWN) return -1;
    if (oldState === ThumbState.DOWN && newState === ThumbState.NONE) return 0;
    if (oldState === ThumbState.UP && newState === ThumbState.NONE) return -1;
    return 0;
  }

  static computeDownDiff(oldState: ThumbState, newState: ThumbState) {
    if (oldState === ThumbState.NONE && newState === ThumbState.UP) return 0;
    if (oldState === ThumbState.NONE && newState === ThumbState.DOWN) return 1;
    if (oldState === ThumbState.DOWN && newState === ThumbState.UP) return -1;
    if (oldState === ThumbState.UP && newState === ThumbState.DOWN) return 1;
    if (oldState === ThumbState.DOWN && newState === ThumbState.NONE) return -1;
    if (oldState === ThumbState.UP && newState === ThumbState.NONE) return 0;
    return 0;
  }
}