import { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useActionWithPayload = <T>(
  action: (payload: T) => PayloadAction<T>
) => {
  const dispatch = useDispatch();
  const handler = useCallback(
    (payload: T) => {
      dispatch(action(payload));
    },
    [dispatch, action]
  );

  return handler;
};

export const useAction = (action: () => PayloadAction<undefined>) => {
  const dispatch = useDispatch();

  const handler = useCallback(() => {
    dispatch(action());
  }, [dispatch, action]);

  return handler;
};

export const useThunk = <R, C>(thunk: AsyncThunk<R, void, C>) => {
  const dispatch = useDispatch();

  const handler = useCallback(() => {
    dispatch(thunk());
  }, [dispatch, thunk]);

  return handler;
};

export const useThunkWithPayload = <R, A, C>(thunk: AsyncThunk<R, A, C>) => {
  const dispatch = useDispatch();

  const handler = useCallback(
    (payload: A) => {
      dispatch(thunk(payload));
    },
    [dispatch, thunk]
  );

  return handler;
};
