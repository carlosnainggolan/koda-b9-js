const movie = {
  id : 234,
  title : "Titanic",
  image : 'Ship',
  genre : ['Romance', 'Politic', 'Horror'],
  cast : [
    {
      name : "Leonardo diCaprio",
      role : "Male performer"
    },
    {
      name : "Rose", 
      role : "Female performer"
    }
  ],
  dataMainList : function () {
    return `Judul : ${this.title}
Gambar : ${this.image}
Genre : ${this.genre} `
  },
  dataCastName : function () {
    for (let i = 0; i < this.cast.length;  i++) {
      return `Casting : ${this.cast[i].name}`
    }
  },
  changeTitle : function (newTitle) {
    if (typeof newTitle !== 'string'){
      return `Invalid title`
    }
    this.title = newTitle
    return `Judul baru : ${newTitle}`
  }, 
  changeImage : function (newImage) {
    if (typeof newImage !== 'string') {
      return `Invalid image`
    }
    this.image = newImage
    return `Gambar baru : ${newImage}`
  }
}

console.log(movie.dataMainList())
console.log(movie.dataCastName())
console.log(movie.changeTitle('Carlos'))
console.log(movie.changeImage('Lamborghini'))
console.log(movie.changeTitle(1))
console.log(movie.changeImage(2))