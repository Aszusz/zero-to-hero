import { middleware } from './middleware';
import { Action } from '@/core/actions';
import { reducer } from '@/core/reducer';
import { State } from '@/core/state';
import { useDispatch } from 'react-redux';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  Dispatch,
  Middleware,
} from 'redux';

export const store = createStore(reducer, applyMiddleware(middleware));

export type AppDispatch = Dispatch<Action>;

export type AppMiddleware<Ext = object> = Middleware<Ext, State, AppDispatch>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
