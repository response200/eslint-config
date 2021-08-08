/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call */

const a: any = 'abc'
const b: { foo: any } = { foo: { bar: 'abc' } }

a.split('')
b.foo.bar.split('')
