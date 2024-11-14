import { delay, random } from './effects';
import { AC, Action, AT } from '@/core/actions';
import { State } from '@/core/state';
import { Dispatch, isAction, Middleware } from 'redux';

export function isAppAction(action: unknown): action is Action {
  return isAction(action);
}

export const middleware: Middleware<object, State, Dispatch<Action>> =
  (store) => (next) => async (action) => {
    if (!isAppAction(action) || action.type.startsWith('_')) {
      return next(action);
    }

    if (action.type === AT['ui/increment-async']) {
      const rnd = random(5, 10);
      await delay(rnd * 200);
      store.dispatch(AC['eff/increment-async-ready'](rnd));
    }

    return next(action);
  };
