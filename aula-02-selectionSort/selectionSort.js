const books = require('./bookList')
const lowerValue = require ('./lowerValue')

for (let current = 0; current < books.length; current++) {
    let lowest = lowerValue(books, current) 

    let currentBook = books[current] 
    console.log(`Posicao atual: ${current}`)
    console.log(`Livro atual: ${JSON.stringify(currentBook)}`)

    let cheapestBook = books[lowest]
    console.log(`Livro mais barato: ${JSON.stringify(cheapestBook)}`)
    console.log("===============================")

    books[current] = cheapestBook
    books[lowest] = currentBook
}

console.log(books)
