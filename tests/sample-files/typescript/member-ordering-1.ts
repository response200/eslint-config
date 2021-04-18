export interface T1 {
  a2: () => void
  a1: () => void
  b2: string
  b1: string
  [c: string]: unknown
}

export class C1 {
  a2 (): string {
    return '123'
  }

  a1 (): string {
    return '123'
  }

  [c: string]: string
  b2 = '123'
  b1 = '123'
}
