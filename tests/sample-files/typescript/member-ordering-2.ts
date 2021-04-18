export interface T1 {
  [c: string]: unknown
  a2: () => void
  a1: () => void
  b2: string
  b1: string
}

export class C1 {
  [c: string]: string
  b2 = '123'
  b1 = '123'

  a2 (): string {
    return '123'
  }

  a1 (): string {
    return '123'
  }
}
