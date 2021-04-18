/* eslint-disable @typescript-eslint/no-explicit-any */
export function foo<T extends string> (arg: T): T {
  return arg
}

export function bar<T extends any> (arg: T): T {
  return arg
}

export function baz<T extends unknown> (arg: T): T {
  return arg
}
