// Pandigital Products
// https://projecteuler.net/problem=32

const isPandigital = (a: number, b: number) => {
  const p = a * b
  const signature = `${a}${b}${p}`
  let result = signature.length === 9
  if (result) {
    for (let i = 1; i <= 9; i++) {
      if (!signature.includes(`${i}`)) {
        result = false
        break
      }
    }
  }
  return result ? p : null
}

export const pandigitalProducts = () => {
  const products = {}
  for (let a = 1; a <= 2000; a++) {
    for (let b = 1; b <= 2000; b++) {
      const product = isPandigital(a, b)
      if (product) {
        products[product] = true
      }
    }
  }
  return Object.keys(products).reduce((sum, num) => sum + parseInt(num), 0)
}
