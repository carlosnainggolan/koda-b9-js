function emailLowerCase() {
  const api = fetch("https://jsonplaceholder.typicode.com/users")
  api.then((result) => {
    if (!result.ok) {
      throw 'Error'
    }
    return result.json()
  }).then((api) => {
    const email = []
    for (let i = 0; i < api.length; i++) {
      email[i] = api[i].email.toLowerCase()
    }
    console.log(email)
  }).catch((error) => console.log(error))
}

async function asyncfetch() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error('Error')
    }
    const data = await res.json();
    const email = []
    for (let i = 0; i < data.length; i++) {
      email[i] = data[i].email.toLowerCase()
    }
    console.log(email)
  } catch (error) {
    console.log(error.messages)
  }
}

function manualThen() {
  const api = fetch("https://jsonplaceholder.typicode.com/users")
  api.then((result) => {
    if (!result.ok) {
      throw 'Error'
    }
    return result.json()
  }).then((api) => {
    let cart = []
    for (let x of api) {
      let email = "";
      for (let b of x.email) {
        if (b >= "A" && b <= "Z") {
          n = (b.codePointAt(0) + 32);
          s = String.fromCharCode(n)
          email += s
        } else {
          email += b
        }
      }
      cart.push(email)
    }
    console.log(cart)
  }).catch((error) => console.log(error))
}

async function manual() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error('Error')
    }
    const data = await res.json();
    let cart = []
    for (let x of data) {
      let email = "";
      for (let b of x.email) {
        if (b >= "A" && b <= "Z") {
          n = (b.codePointAt(0) + 32);
          s = String.fromCharCode(n)
          email += s
        } else {
          email += b
        }
      }
      cart.push(email)
    }
    console.log(cart)
  } catch (error) {
    console.log(error.messages)
  }
}

manual()
manualThen()

// asyncfetch()
// emailLowerCase()