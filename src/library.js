function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  library = library
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book)
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book) 
  } else {
    library.shelves.nonFiction.push(book)
  }
  return library
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};