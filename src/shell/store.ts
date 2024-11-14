import { counterMiddleware } from './middleware/counterMiddleware';
import { loggerMiddleware } from './middleware/loggingMiddleware';
import { Action } from '@/core/actions';
import { reducer } from '@/core/reducer';
import { initialState, State } from '@/core/state';
import { composeWithDevTools } from '@redux-devtools/extension';
import { useDispatch } from 'react-redux';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  Dispatch,
  isAction,
  Middleware,
} from 'redux';

const enhancer = composeWithDevTools({
  predicate: (_state, action) => !action.type.startsWith('_'),
})(applyMiddleware(counterMiddleware, loggerMiddleware));

export const store = createStore(reducer, initialState, enhancer);

export function isAppAction(action: unknown): action is Action {
  return isAction(action);
}

export type AppDispatch = Dispatch<Action>;

export type AppMiddleware<Ext = object> = Middleware<Ext, State, AppDispatch>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
