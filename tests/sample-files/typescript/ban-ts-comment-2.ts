// @ts-expect-error
export const a: string = 123

// @ts-expect-error
export const b: string = 'abc'

// @ts-expect-error foo bar
export const c: string = 123

// @ts-expect-error foo bar
export const d: string = 'abc'
