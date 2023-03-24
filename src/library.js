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

// function addBook(library, book) {
//   if (book.genre === "fantasy") {
//     library.shelves.fantasy.push(book)
//   } else if (book.genre === "fiction") {
//     library.shelves.fiction.push(book) 
//   } else {
//     library.shelves.nonFiction.push(book)
//   }
//   return library
// }

// refactored

function addBook(library, book) {
  library.shelves[book.genre].push(book);
  return library;
}


function checkoutBook(library, book, shelf) {
  for ( i = library.shelves[shelf].length - 1; i >= 0; i--) {
    if (library.shelves[shelf][i].title === book) {
      library.shelves[shelf].slice(i)
      console.log(library)
      return `You have now checked out ${book} from the ${library.name}.`
    } else {
       return `Sorry, there are currently no copies of ${book}
       available at the ${library.name}.`
          }
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};