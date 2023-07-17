const books = require('./bookList')
const lowerValue = require ('./lowerValue')

for (let current = 0; current < books.length; current++) {
    let lowest = lowerValue(books, current) 

    let currentBook = books[current] 
    let cheapestBook = books[lowest]

    books[current] = cheapestBook
    books[lowest] = currentBook
}

console.log(books)
