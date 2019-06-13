import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

  // logItOut = createEffect(() =>
  //   this.actions$
  //     .pipe(
  //       tap(a => console.log(a.type))
  //     ),
  //   { dispatch: false }
  // );

  saveSetCountBy = createEffect(() =>
    this.actions$
      .pipe(
        ofType(counterActions.setCountBy),
        tap(action => {
          localStorage.setItem('count-by', action.by.toString());
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
