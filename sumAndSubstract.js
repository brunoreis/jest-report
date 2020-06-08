import { sum } from './sum'
import { substract } from './substract'

export const sumAndSubstract = (a, b, c) => {
  const result1 = sum(a, b)
  return substract(result1, c)
}
