import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectAtZero, selectCurrentCount, selectCurrentCountBy, selectDecrementDisabled } from '../../reducers';
import * as CounterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  atZero$: Observable<boolean>;
  by$: Observable<number>;
  decrementDisabled$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.atZero$ = this.store.select(selectAtZero);
    this.by$ = this.store.select(selectCurrentCountBy);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
  }

  increment() {
    this.store.dispatch(CounterActions.countIncremented());
  }

  decrement() {
    this.store.dispatch(CounterActions.countDecremented());
  }

  reset() {
    this.store.dispatch(CounterActions.countReset());
  }

  setCountBy(what: number) {
    this.store.dispatch(CounterActions.setCountBy({ by: what }));
  }

}
