let myBook = {
    year: 1996,
    name: 'tenida',
    writer: 'narayan chandra',
    page: 500
}

let secondBook = {
    year: 1896,
    name: 'Gora',
    writer: 'rabindranath',
    page: 500
}


BookReader = (book) => console.log(`${book.name} is written by ${book.writer} during ${book.year}`)

BookReader(myBook)
BookReader(secondBook)

// console.log(myBook.name, myBook.writer)
