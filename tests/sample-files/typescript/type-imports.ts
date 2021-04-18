import type { T1 } from './type-definitions'
import { T2 } from './type-definitions'
import type { foo, T3 } from './type-definitions'
import { bar, T4 } from './type-definitions'

export const b: T1 = { a: 'a', b: 2 }
export const c: T2 = { a: 'a', b: 2 }
export const d: T3 = foo()
export const e: T4 = bar()

export type T = import('./type-definitions').T1
export const x: import('./type-definitions').T3 = 'abc'
