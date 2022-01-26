/* eslint-disable import/no-duplicates, import/order */
import { constA } from './helpers/consistent-type-imports'
import { TypeA } from './helpers/consistent-type-imports'

import type { constB } from './helpers/consistent-type-imports'
import type { TypeB } from './helpers/consistent-type-imports'

import { constC, TypeC } from './helpers/consistent-type-imports'

import type { constD, TypeD } from './helpers/consistent-type-imports'

// TypeScript 4.5 added the possibility to indicate type-only imports inside the
// curly braces like below. It seems @typescript-eslint/consistent-type-imports
// does not allow this type of importing yet. Maybe it will in the future.
import { constE, type TypeE } from './helpers/consistent-type-imports'

export const a: TypeA = constA
export const b: TypeB = constB
export const c: TypeC = constC
export const d: TypeD = constD
export const e: TypeE = constE

export type TypeX = import('./helpers/consistent-type-imports').TypeA
export const constY: import('./helpers/consistent-type-imports').TypeA = constA
