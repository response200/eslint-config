/* eslint-disable @typescript-eslint/no-unused-vars */
const b: string = 123 as unknown as string
const c: string = <string><unknown>123

interface Foo {
  bar: number
}

const d: Foo = 123 as unknown as Foo
const e: Foo = <Foo><unknown>123

function bar (p: Foo) {
  return p.bar
}

bar({} as Foo)
bar(<Foo>{})

const f = {} as Foo
const g = <Foo>{}
