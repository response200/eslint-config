/* eslint-disable @typescript-eslint/consistent-type-definitions, @typescript-eslint/prefer-function-type */
export const aBcd = 123
export const aBCd = 123
export const AbCd = 123
export const ABCd = 123
export const a_bcd = 123
export const A_BCD = 123
export const _aBcd = 123
export const aBcd_ = 123
export const _aBcd_ = 123

export function eFgh (): number { return 123 }
export function eFGh (): number { return 123 }
export function EfGh (): number { return 123 }
export function EFGh (): number { return 123 }
export function e_fgh (): number { return 123 }
export function E_FGH (): number { return 123 }
export function _eFgh (): number { return 123 }
export function eFgh_ (): number { return 123 }
export function _eFgh_ (): number { return 123 }

export class iJkl {
  bAar (): string { return 'bar' }
  fOoz = 'foo'
}
export class iJKl {
  bAAr (): string { return 'bar' }
  fOOz = 'foo'
}
export class IjKl {
  BaAr (): string { return 'bar' }
  FoOz = 'foo'
}
export class IJKl {
  BAAr (): string { return 'bar' }
  FOOz = 'foo'
}
export class i_jkl {
  b_aar (): string { return 'bar' }
  f_ooz = 'foo'
}
export class I_JKL {
  B_AAR (): string { return 'bar' }
  F_OOZ = 'foo'
}
export class _IjKl {
  _bAar (): string { return 'bar' }
  _fOoz = 'foo'
}
export class IjKl_ {
  bAar_ (): string { return 'bar' }
  fOoz_ = 'foo'
}
export class _IjKl_ {
  _bAar_ (): string { return 'bar' }
  _fOoz_ = 'foo'
}

export enum mNop { foo = 'foo' }
export enum mNOp { foo = 'foo' }
export enum MnOp { foo = 'foo' }
export enum MNOp { foo = 'foo' }
export enum m_nop { foo = 'foo' }
export enum M_NOP { foo = 'foo' }
export enum _MnOp { foo = 'foo' }
export enum MnOp_ { foo = 'foo' }
export enum _MnOp_ { foo = 'foo' }

export enum EnumMembers {
  fooBar = 'foo1',
  foOBar = 'foo2',
  FooBar = 'foo3',
  FOOBar = 'foo4',
  foo_bar = 'foo5',
  FOO_BAR = 'foo6',
  _FooBar = 'foo7',
  FooBar_ = 'foo8',
  _FooBar_ = 'foo9'
}

export type fooType = string
export type foOType = string
export type FooType = string
export type FOOType = string
export type foo_type = string
export type FOO_TYPE = string
export type _FooType = string
export type FooType_ = string
export type _FooType_ = string

export type TypeProps = {
  fooBar: string
  foOBar: string
  FooBar: string
  FOOBar: string
  foo_bar: string
  FOO_BAR: string
  _FooBar: string
  FooBar_: string
  _FooBar_: string
}

export type TypeParams1<typeParam> = { foo: typeParam }
export type TypeParams2<typEParam> = { foo: typEParam }
export type TypeParams3<TypeParam> = { foo: TypeParam }
export type TypeParams4<TYPEParam> = { foo: TYPEParam }
export type TypeParams5<type_param> = { foo: type_param }
export type TypeParams6<TYPE_PARAM> = { foo: TYPE_PARAM }
export type TypeParams7<_TypeParam> = { foo: _TypeParam }
export type TypeParams8<TypeParam_> = { foo: TypeParam_ }
export type TypeParams9<_TypeParam_> = { foo: _TypeParam_ }

export interface fooInterface { (): void }
export interface foOInterface { (): void }
export interface FooInterface { (): void }
export interface FOOInterface { (): void }
export interface foo_interface { (): void }
export interface FOO_INTERFACE { (): void }
export interface _FooInterface { (): void }
export interface FooInterface_ { (): void }
export interface _FooInterface_ { (): void }

export interface InterfaceProps {
  fooBar: string
  foOBar: string
  FooBar: string
  FOOBar: string
  foo_bar: string
  FOO_BAR: string
  _FooBar: string
  FooBar_: string
  _FooBar_: string
}

export interface InterfaceTypeParams1<typeParam> { foo: typeParam }
export interface InterfaceTypeParams2<typEParam> { foo: typEParam }
export interface InterfaceTypeParams3<TypeParam> { foo: TypeParam }
export interface InterfaceTypeParams4<TYPEParam> { foo: TYPEParam }
export interface InterfaceTypeParams5<type_param> { foo: type_param }
export interface InterfaceTypeParams6<TYPE_PARAM> { foo: TYPE_PARAM }
export interface InterfaceTypeParams7<_TypeParam> { foo: _TypeParam }
export interface InterfaceTypeParams8<TypeParam_> { foo: TypeParam_ }
export interface InterfaceTypeParams9<_TypeParam_> { foo: _TypeParam_ }

export const qRst = {
  bAar (): string { return 'bar' },
  fOoz: 'foo'
}
export const qRSt = {
  bAAr (): string { return 'bar' },
  fOOz: 'foo'
}
export const QrSt = {
  BaAr (): string { return 'bar' },
  FoOz: 'foo'
}
export const QRSt = {
  BAAr (): string { return 'bar' },
  FOOz: 'foo'
}
export const q_rst = {
  b_aar (): string { return 'bar' },
  f_ooz: 'foo'
}
export const Q_RST = {
  B_aAR (): string { return 'bar' },
  F_OOZ: 'foo'
}
export const _qRst = {
  _bAar (): string { return 'bar' },
  _fOoz: 'foo'
}
export const qRst_ = {
  bAar_ (): string { return 'bar' },
  fOoz_: 'foo'
}
export const _qRst_ = {
  _bAar_ (): string { return 'bar' },
  _fOoz_: 'foo'
}

export const vWxy = class {
  bAar (): string { return 'bar' }
  fOoz = 'foo'
}
export const vWXy = class {
  bAAr (): string { return 'bar' }
  fOOz = 'foo'
}
export const VwXy = class {
  BaAr (): string { return 'bar' }
  FoOz = 'foo'
}
export const VWXy = class {
  BAAr (): string { return 'bar' }
  FOOz = 'foo'
}
export const v_wxy = class {
  b_aar (): string { return 'bar' }
  f_ooz = 'foo'
}
export const V_WXY = class {
  B_aAR (): string { return 'bar' }
  F_OOZ = 'foo'
}
export const _VwXy = class {
  _bAar (): string { return 'bar' }
  _fOoz = 'foo'
}
export const VwXy_ = class {
  bAar_ (): string { return 'bar' }
  fOoz_ = 'foo'
}
export const _VwXy_ = class {
  _bAar_ (): string { return 'bar' }
  _fOoz_ = 'foo'
}
