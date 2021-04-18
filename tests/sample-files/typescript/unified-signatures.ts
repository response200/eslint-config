/* eslint-disable no-console */
export function foo (param: string): void
export function foo (param: number): void
export function foo (param: unknown): void {
  console.log(param)
}

export function bar (param: string | number): void
export function bar (param: unknown): void {
  console.log(param)
}
