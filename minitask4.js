const array = [
  {
    name: 'carlos'
  },
  {
    tanggal: '20'
  },
  'carlos',
  'brandsma',
  'nainggolan',
  true, 
  9,
  [],
  []
]

let number = 0
let string = 0
let boolean = 0
let object = 0
let array1 = 0

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'number') {
    number++
  } else if (typeof array[i] === 'string') {
    string++
  } else if (typeof array[i] === 'boolean') {
    boolean++
  } else if (array[i] instanceof Object && !Array.isArray(array[i])) {
    object++
  } else if (Array.isArray(array[i])) {
    array1++
  }
}

console.log(`
    Number = ${number},
    String = ${string},
    boolean = ${boolean},
    Object = ${object},
    array1 = ${array1}
  `)