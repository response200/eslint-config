/* eslint-disable no-constant-condition, @typescript-eslint/no-unused-vars, @typescript-eslint/strict-boolean-expressions */
const ternary1 = 'abc' ? 'def' : 'ghi'
const ternary2 = 'abc' ?
  'def' :
  'ghi'
const ternary3 = 'abc'
  ? 'def'
  : 'ghi'

const nullish1 = 'abc' ?? 'def'
const nullish2 = 'abc' ??
  'def'
const nullish3 = 'abc'
  ?? 'def'

const and1 = 'abc' && 'abc'
const and2 = 'abc' &&
  'abc'
const and3 = 'abc'
  && 'abc'

const or1 = 'abc' || 'abc'
const or2 = 'abc' ||
  'abc'
const or3 = 'abc'
  || 'abc'

const x = 'x'
let nullishAssign = 'abc'
nullishAssign ??= x
nullishAssign ??=
  x
nullishAssign
  ??= x

let andAssign = 'abc'
andAssign &&= x
andAssign &&=
  x
andAssign
  &&= x

let orAssign = 'abc'
orAssign ||= x
orAssign ||=
  x
orAssign
  ||= x
