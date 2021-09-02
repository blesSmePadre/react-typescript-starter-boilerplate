import { store as serverStore } from 'store/server';

import { ThunksToRun } from '@types';

export const loadBranchData = (
  store: typeof serverStore,
  params: Record<string, string>,
  thunksToRun: ThunksToRun
) => {
  const thunks = thunksToRun.map((thunk) => {
    if (Array.isArray(thunk)) {
      return thunk[0](thunk[1](params));
    }

    return thunk();
  });

  return Promise.all(
    thunks.map((thunk) =>
      thunk(store.dispatch.bind(store), store.getState.bind(store), {}).unwrap()
    )
  );
};

export default () => Promise.resolve();
