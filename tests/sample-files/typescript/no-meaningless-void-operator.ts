/* eslint-disable @typescript-eslint/no-confusing-void-expression, @typescript-eslint/no-empty-function */

function foo (): void {
}

async function asyncFoo (): Promise<void> {
  await Promise.resolve()
}

foo()
void foo()
await asyncFoo()
void await asyncFoo()

function bar (): number {
  return 123
}

async function asyncBar (): Promise<number> {
  await Promise.resolve(123)
}

bar()
void bar()
await asyncBar()
void await asyncBar()

function baz (): never {
  throw new Error('baz')
}

async function asyncBaz (): Promise<never> {
  await Promise.resolve()
  throw new Error('baz')
}

baz()
void baz()
await asyncBaz()
void await asyncBaz()

export { }
