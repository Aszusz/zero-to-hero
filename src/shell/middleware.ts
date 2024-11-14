import { delay, random } from './effects';
import { AppMiddleware } from './store';
import { AC, Action, AT } from '@/core/actions';
import { isAction } from 'redux';

export function isAppAction(action: unknown): action is Action {
  return isAction(action);
}

export const middleware: AppMiddleware =
  (store) => (next) => async (action) => {
    if (!isAppAction(action) || action.type.startsWith('_')) {
      return next(action);
    }

    const result = next(action);

    if (action.type === AT['ui/increment-async']) {
      const rnd = random(5, 10);
      await delay(rnd * 200);
      store.dispatch(AC['eff/increment-async-ready'](rnd));
    }

    return result;
  };
