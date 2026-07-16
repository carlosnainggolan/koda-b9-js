const account = {
  username : 'carlosnainggolan',
  password : '12345'
}

const updateData = {...account, password: "123456"}

if (updateData.password.length < 5) {
  console.log('password minimal 5 karakter')
} else {
  console.log(`
  Update Data:
  Username: ${updateData.username}
  Password: ${updateData.password}`)
}