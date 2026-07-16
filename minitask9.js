function proccessArray (arr, processor) {
  const result = []
  if (!Array.isArray(arr)) {
    return 'Invalid Array'
  }

  if (typeof processor !== 'function') {
    return `invalid function`
  }

  for (let i = 0; i < arr.length; i++ ) {
    result[i] = processor(arr[i])
  }
  return result
}

const showNumber = num => `Number ${num}`
const makeDollar = num => `$${num}`
const addFive = num => num + 5

const numbers = [1, 2, 3, 4, 5]

console.log(proccessArray(numbers, showNumber))
console.log(proccessArray(numbers, makeDollar))
console.log(proccessArray(numbers, addFive))
