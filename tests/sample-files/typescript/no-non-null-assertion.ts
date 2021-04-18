interface T1 {
  bar?: string
  foo?: number
}

export const b: T1 = {}
export const c = b.foo! === 1 ? 2 : 3
export const d = b.bar!.split(',')
export const e = (b.bar as string).split(',')
