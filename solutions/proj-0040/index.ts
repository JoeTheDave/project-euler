// Champernownes Constant
// https://projecteuler.net/problem=40

export const champernownesConstant = () => {
  let champernowne = ''
  let x = 1
  let product = 1
  do {
    champernowne += x
    x++
  } while (champernowne.length <= 1000000)
  for (let e = 0; e <= 6; e++) {
    product *= parseInt(champernowne.charAt(10 ** e - 1))
  }
  return product
}
