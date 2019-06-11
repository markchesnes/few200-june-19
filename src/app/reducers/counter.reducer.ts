import { Action } from '@ngrx/store';



export interface State {
  current: number;
}

const initialState: State = {
  current: 42
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'Increment': {
      return {
        current: state.current + 1
      };
    }
    case 'Decrement': {
      return {
        current: state.current - 1
      };
    }
    default: {
      return state;
    }
  }
}
