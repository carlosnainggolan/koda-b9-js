const items = [1, 2, 3, 4 ,5]
// items.reverse()
// console.log(items)
//input tidak ada
//output: hasil reverse dari array
//built in method reverse adalah fungsi mutasi

// bentuk manual 
for (let i = 0; i < items.length/2; i++) {
  let temp = items[i]
  let ind = items.length - 1
  items [i] = items[ind - i]
  items[ind-i] = temp
}

// items[0] = items [4]
// items[1] = items [3]
// items[2] = items [2]
// items[3] = items [1]
// items[4] = items [0]

console.log(items)