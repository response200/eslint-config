/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */

function foo1 (param: string): string {
  return param
}

function foo2 (param: any): string {
  return param
}

function foo3 (param: string[]): string[] {
  return param
}

function foo4 (param: any[]): string[] {
  return param
}

const stringArg: any = 'abc'
const arrayArg: any[] = ['abc']

foo1(stringArg)
foo2(stringArg)
foo3(stringArg)
foo4(stringArg)

foo2(arrayArg)
foo3(arrayArg)
foo4(arrayArg)
