export interface T1 {
  [c: string]: unknown
  a1: () => void
  a2: () => void
  b1: string
  b2: string
}

export class C1 {
  [c: string]: string
  b1 = '123'
  b2 = '123'

  a1 (): string {
    return '123'
  }

  a2 (): string {
    return '123'
  }
}
