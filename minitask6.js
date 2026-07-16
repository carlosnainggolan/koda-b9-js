const data = {
  id: 1, 
  meta: {
    author: 'Jane',
    tags: ['js', 'es6' ]
  }
}

const { id } = data
const { author } = data.meta
const [a,b] = data.meta['tags']
console.log(id, author, a)