/* eslint-disable array-bracket-spacing, @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import { rm, rmdir, } from 'fs'

const a = 123
export { a, }

const array = [123, 456, ]
const object = { foo: 'abc', bar: 'def', }
function func (foo, bar,) {}

enum Enum { Foo = 'abc', Bar = 'def', }
type GenericType<T1, T2,> = (foo: T1) => T2
interface GenericInterface<T1, T2,> {
  foo: T1
  bar: T2
}
type Tuple = [string, number, ]
