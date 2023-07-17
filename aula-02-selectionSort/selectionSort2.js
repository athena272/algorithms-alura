const books = require('./bookList')
const lowerValue = require('./lowerValue')

books.forEach((book, index) => {
    let lowest = lowerValue(books, index)

    let currentBook = books[index]
    console.log(`Posicao atual: ${index}`)
    console.log(`Livro atual: ${JSON.stringify(currentBook)}`)
    let cheapestBook = books[lowest]
    console.log(`Livro mais barato: ${JSON.stringify(cheapestBook)}`)
    console.log("===============================")

    books[index] = cheapestBook
    books[lowest] = currentBook
})

console.log(books)