/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

const a: any = 'abc'
const b: string = 'def'
const c = 'ghi'

const constantOfStringType: string = a
const constantWhoseTypeIsInferred = a

const arrayOfStrings: string[] = [a, b, c]
const arrayWhoseTypeIsInferred = [a, b, c]
const anotherArrayOfStrings: string[] = arrayWhoseTypeIsInferred
const arrayOfUnknowns: unknown[] = arrayWhoseTypeIsInferred

const objectOfStrings: { a: string, b: string, c: string } = { a, b, c }
const objectOfStringsDefinedUsingIndexSignature: { [key: string]: string } = { a, b, c }
const objectOfStringsDefinedUsingRecord: Record<string, string> = { a, b, c }
const objectWhoseTypeIsInferred = { a, b, c }

let variableOfStringType: string = 'aaa'
variableOfStringType = a
let variableWhoseTypeIsInferred = 'aaa'
variableWhoseTypeIsInferred = a
