/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

export interface A { foo: string }
export type B = { foo: string }

type AllowedKeys = 'foo' | 'bar'
export type C = { [key in AllowedKeys]: string }

export interface D { [key: string]: string }
export type E = { [key: string]: string }
