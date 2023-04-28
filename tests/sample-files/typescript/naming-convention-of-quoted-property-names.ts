/* eslint-disable @typescript-eslint/consistent-type-definitions */
export class ClassProps {
  'Content-Type' = 'foo'
  Content_Type = 'foo'
}

export enum EnumMembers {
  'Content-Type' = 'foo1',
  Content_Type = 'foo2'
}

export type TypeProps = {
  'Content-Type': string
  Content_Type: string
}

export interface InterfaceProps {
  'Content-Type': string
  Content_Type: string
}

export const ObjectProps = {
  'Content-Type': 'foo',
  Content_Type: 'foo'
}

export const AnonClassProps = class {
  'Content-Type' = 'foo'
  Content_Type = 'foo'
}
