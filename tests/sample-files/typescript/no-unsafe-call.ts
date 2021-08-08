/* eslint-disable @typescript-eslint/no-explicit-any */

const a: any = () => true
const b: { foo: any } = { foo: () => true }

a()
b.foo()
