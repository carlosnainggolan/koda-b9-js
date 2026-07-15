let discount = ''
const buying = 1000000
let total = ''

if (buying > 0) {
  if (buying > 1000000) {
    discount = 0.1
  } else if (buying >= 500000) {
    discount = 0.05
  } else {
    discount = 0
  }
} else {
  console.log('invalid')
}

total = buying - (buying*discount)

console.log(`Discount: ${discount}`)
console.log(`Total: ${total}`)