// const john = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let name = "John"
//     if (typeof name !== "string") {
//       reject("Nama bukan string")
//     }
//     resolve(name)
//   }, 2000)
// })

// const ed = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let name = "Ed"
//     if (typeof name !== "string") {
//       reject("Nama bukan string")
//     }
//     resolve (name)
//   }, 2000)
// })

// const jane = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let name = "Jane"
//     if (typeof name !== "string") {
//       reject("Nama bukan string")
//     }
//     resolve (name)
//   }, 500)
// })

// john
//   .then((name) => console.log(name))
//   .catch((error) => console.log(error))

// ed
//   .then((name) => console.log(name))
//   .catch((error) => console.log(error))

// jane
//   .then((name) => console.log(name))
//   .catch((error) => console.log(error))

function john () {
  return new Promise ((res, rej) => {
    let name = "John"
    setTimeout(() => {
      if (typeof name === "string") {
        res (name)
      }
      rej ("Invalid")
    }, 1500);
  })
}

function ed() {
  return new Promise ((res, rej) => {
    let name = "Ed"
    setTimeout(() => {
      if (typeof name === "string") {
        res(name)
      }
      rej("Invalid")
    }, 1500);
  })
}

function jane() {
  return new Promise ((res, rej) => {
    let name = "Jane"
    setTimeout(() => {
      if (typeof name === "string") {
        res(name)
      }
      rej("Invalid")
    }, 1500);
  })
}

//john().then(return invoke).then()then().catch()

john()
    .then((res) => {
      console.log(res)
      return ed()
    })
    .then((res) => {
      console.log(res)
      return jane()
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })

async function showNameasync() {
  try {
    console.log (await john())
    console.log(await ed())
    console.log(await jane())
  } catch (error) {
    console.log(error)
  }
}

showNameasync()