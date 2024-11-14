import { delay, random } from '../effects';
import { AppMiddleware, isAppAction } from '../store';
import { AC, AT } from '@/core/actions';

export const counterMiddleware: AppMiddleware =
  (store) => (next) => async (action) => {
    if (!isAppAction(action)) {
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
