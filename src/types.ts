import { RouteConfig } from 'react-router-config';
import { AsyncThunk } from '@reduxjs/toolkit';

export enum Colors {
  white = '#ffffff',
  black = '#000000',
  cornflowerBlue = '#333333',
  dustyGray = '#969696',
}

export type ColorsStrings = keyof typeof Colors;

export enum Delays {
  stubRequestDelay = 1000,
}

export type ThunksToRun =
  | AsyncThunk<any, void, any>[]
  | [AsyncThunk<any, any, any>, (args: any) => any][];

export interface Route extends RouteConfig {
  path: string;
  cache: boolean;
  thunksToRun: ThunksToRun;
}
