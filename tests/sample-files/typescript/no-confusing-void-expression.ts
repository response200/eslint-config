/* eslint-disable @typescript-eslint/no-empty-function */
function foo (): void {
}

export const z1 = new Promise((resolve) => resolve())
export const z2 = new Promise((resolve) => { resolve() }).then(() => foo())
export const z3 = new Promise((resolve) => { resolve() }).then(() => { foo() })
