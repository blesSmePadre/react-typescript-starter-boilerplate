import { useSelector as useSelectorHook, shallowEqual } from 'react-redux';

export const useSelector = <TState, TSelected>(
  func: (state: TState, param?: string | number) => TSelected,
  param?: string | number
) => useSelectorHook((state: TState) => func(state, param), shallowEqual);

export const useParametricSelector = <TState, TParam, TSelected>(
  func: (state: TState, param: TParam) => TSelected,
  param: TParam
) => useSelectorHook((state: TState) => func(state, param), shallowEqual);
