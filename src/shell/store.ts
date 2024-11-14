import { middleware } from './middleware';
import { Action } from '@/core/actions';
import { reducer } from '@/core/reducer';
import { useDispatch } from 'react-redux';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  Dispatch,
} from 'redux';

export const store = createStore(reducer, applyMiddleware(middleware));

export const useAppDispatch = () => useDispatch<Dispatch<Action>>();
