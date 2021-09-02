import * as normalizr from 'normalizr';

import { User } from './types';

type UsersEntities = { users: Record<number, User> };

export const schema = [new normalizr.schema.Entity<User>('users')];

export const normalize = (input: User[]) => {
  const normalized = normalizr.normalize<User, UsersEntities, number[]>(
    input,
    schema
  );

  return {
    ids: {
      users: normalized.result,
    },
    collections: {
      users: normalized.entities.users,
    },
  };
};

export const denormalize = (
  collection: Record<string, User>,
  ids: number[]
): User[] =>
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  normalizr.denormalize(ids, schema, {
    users: collection,
  });
