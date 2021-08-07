/* eslint-disable import/no-duplicates, object-curly-newline, object-property-newline, @typescript-eslint/brace-style, @typescript-eslint/consistent-type-definitions, @typescript-eslint/member-delimiter-style, @typescript-eslint/no-unused-vars */
import {rm as rm1, rmdir as rmdir1} from 'fs'
import {
  rm as rm2, rmdir as rmdir2} from 'fs'
import {rm as rm3, rmdir as rmdir3
} from 'fs'
import { rm as rm4, rmdir as rmdir4 } from 'fs'
import {
  rm as rm5, rmdir as rmdir5
} from 'fs'

const a = 123
const b = 456
export {a as a1, b as b1}
export {
  a as a2, b as b2}
export {a as a3, b as b3
}
export { a as a4, b as b4 }
export {
  a as a5, b as b5
}

export const object1 = {foo: 'abc', bar: 'def'}
export const object2 = {
  foo: 'abc', bar: 'def'}
export const object3 = {foo: 'abc', bar: 'def'
}
export const object4 = { foo: 'abc', bar: 'def' }
export const object5 = {
  foo: 'abc', bar: 'def'
}

export const objectInObject1 = { foo: 'abc', bar: {baz: 'def'} }
export const objectInObject2 = { foo: 'abc', bar: { baz: 'def' }}
export const objectInObject3 = { foo: 'abc', bar: {
  baz: 'def'} }
export const objectInObject4 = { foo: 'abc', bar: {baz: 'def'
} }
export const objectInObject5 = { foo: 'abc', bar: {
  baz: 'def'
}}
export const objectInObject6 = { foo: 'abc', bar: { baz: 'def' } }
export const objectInObject7 = { foo: 'abc', bar: {
  baz: 'def'
} }

export const arrayInObject1 = { foo: 'abc', bar: ['def'] }
export const arrayInObject2 = { foo: 'abc', bar: ['def']}
export const arrayInObject3 = { foo: 'abc', bar: [
  'def']}
export const arrayInObject4 = { foo: 'abc', bar: ['def'
]}
export const arrayInObject5 = { foo: 'abc', bar: [
  'def'
]}
export const arrayInObject6 = { foo: 'abc', bar: ['def'] }
export const arrayInObject7 = { foo: 'abc', bar: [
  'def'
] }

const {a1, b1} = { a1: 'abc', b1: 'def' }
const {
  a2, b2} = { a2: 'abc', b2: 'def' }
const {a3, b3
} = { a3: 'abc', b3: 'def' }
const { a4, b4 } = { a4: 'abc', b4: 'def' }
const {
  a5, b5
} = { a5: 'abc', b5: 'def' }

type TypeObject1 = {foo: string, bar: string}
type TypeObject2 = {
  foo: string, bar: string}
type TypeObject3 = {foo: string, bar: string
}
type TypeObject4 = { foo: string, bar: string }
type TypeObject5 = {
  foo: string, bar: string
}

type TypeObjectInObject1 = { foo: string, bar: {baz: string} }
type TypeObjectInObject2 = { foo: string, bar: { baz: string }}
type TypeObjectInObject3 = { foo: string, bar: {
  baz: string} }
type TypeObjectInObject4 = { foo: string, bar: {baz: string
} }
type TypeObjectInObject5 = { foo: string, bar: {
  baz: string
}}
type TypeObjectInObject6 = { foo: string, bar: { baz: string } }
type TypeObjectInObject7 = { foo: string, bar: {
  baz: string
} }

interface InterfaceObject1 {foo: string, bar: string}
interface InterfaceObject2 {
  foo: string, bar: string}
interface InterfaceObject3 {foo: string, bar: string
}
interface InterfaceObject4 { foo: string, bar: string }
interface InterfaceObject5 {
  foo: string, bar: string
}

interface InterfaceObjectInObject1 { foo: string, bar: {baz: string} }
interface InterfaceObjectInObject2 { foo: string, bar: { baz: string }}
interface InterfaceObjectInObject3 { foo: string, bar: {
  baz: string} }
interface InterfaceObjectInObject4 { foo: string, bar: {baz: string
} }
interface InterfaceObjectInObject5 { foo: string, bar: {
  baz: string
}}
interface InterfaceObjectInObject6 { foo: string, bar: { baz: string } }
interface InterfaceObjectInObject7 { foo: string, bar: {
  baz: string
} }
