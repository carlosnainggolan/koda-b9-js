let kembali = 100000
let limapuluh = 0
let sepuluh = 0
let lima = 0
let dua = 0
let satu = 0

while (kembali > 0) {
  if (kembali - 50000 >= 0) {
    kembali -= 50000
    limapuluh++
  } else if (kembali - 10000 >= 0) {
    kembali -= 10000
    sepuluh++
  } else if (kembali - 5000 >= 0) {
    kembali -= 5000
    lima++
  } else if (kembali - 2000 >= 0) {
    kembali -= 2000
    dua++
  } else if (kembali - 1000 >= 0) {
    kembali -= 1000
    satu++
  }
}

console.log(`50rb = ${limapuluh}`)
console.log(`10rb = ${sepuluh}`)
console.log(`5rb = ${lima}`)
console.log(`2rb = ${dua}`)
console.log(`1rb = ${satu}`)