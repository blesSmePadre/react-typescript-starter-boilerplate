export const sliceName = 'users';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: boolean;
  fetched: boolean;
}

export interface UsersState {
  fetching: boolean;
  fetched: boolean;
  collection: Record<string, User>;
  ids: number[];
}
