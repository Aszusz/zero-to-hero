import { Action, AT } from './actions';
import { initialState, State } from './state';

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case AT['ui/increment']: {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case AT['ui/decrement']: {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case AT['eff/increment-async-ready']: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }

    default:
      return state;
  }
};
