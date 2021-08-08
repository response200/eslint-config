/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

function foo1 (): any {
  return 'abc'
}

function foo2 (): number {
  return 'abc' as any
}

function foo3 () {
  return 'abc' as any
}

function foo4 (): any[] {
  return ['abc']
}

function foo5 (): number[] {
  return ['abc'] as any[]
}

function foo6 () {
  return ['abc'] as any[]
}
