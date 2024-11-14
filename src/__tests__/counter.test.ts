import { AC } from '@/core/actions';
import { reducer } from '@/core/reducer';
import { selectCount } from '@/core/selectors';
import { initialState } from '@/core/state';
import { describe, it, expect } from 'vitest';

describe('Counter Functionality', () => {
  it('should initialize the count to 0', () => {
    const result = selectCount(initialState);
    expect(result).toBe(0);
  });

  it('should increment the count by 1 when increment action is dispatched', () => {
    const state = reducer(initialState, AC['ui/increment'](null));
    const result = selectCount(state);
    expect(result).toBe(1);
  });

  it('should decrement the count by 1 when decrement action is dispatched', () => {
    const state = reducer(initialState, AC['ui/decrement'](null));
    const result = selectCount(state);
    expect(result).toBe(-1);
  });

  it('should increment the count by the specified amount when async increment action completes', () => {
    const state1 = reducer(initialState, AC['ui/increment-async'](null));
    const state2 = reducer(state1, AC['eff/increment-async-ready'](7));
    const result = selectCount(state2);
    expect(result).toBe(7);
  });
});
