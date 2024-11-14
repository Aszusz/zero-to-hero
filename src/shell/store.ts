import { Action } from '@/core/actions';
import { reducer } from '@/core/reducer';
import { useDispatch } from 'react-redux';
import { legacy_createStore as createStore, Dispatch } from 'redux';

export const store = createStore(reducer);

export const useAppDispatch = () => useDispatch<Dispatch<Action>>();
