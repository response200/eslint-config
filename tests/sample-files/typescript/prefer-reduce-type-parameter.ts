export const foo = [1, 2, 3].reduce((arr, num) => arr.concat(num * 2), [] as number[])
export const boo = [1, 2, 3].reduce<number[]>((arr, num) => arr.concat(num * 2), [])
