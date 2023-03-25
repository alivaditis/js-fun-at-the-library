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
}


function checkoutBook(library, book, shelf) {
  var bookExists = false

  for ( var i = library.shelves[shelf].length - 1; i >= 0; i--) {
    if (library.shelves[shelf][i].title === book) {
      bookExists = true
      library.shelves[shelf].splice(i, 1)
      console.log(library)
      }
    }
  if (bookExists === true) {
    return `You have now checked out ${book} from the ${library.name}.`
  }
else {
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}.`
    }
  }

function takeStock(library, genre) {
  
  if (genre) {
  return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
    } else {
      var totalBooks = Object.values(library.shelves).length
      // for (i=0; i<library.shelves[genre].length; i++) {
      //   totalBooks = totalBooks + 
      // }
      return `There are a total of ${totalBooks} books at the ${library.name}.`
    }
}
//   else {
//     totalBooks = 0
//     for (i=0; i<library.shelves[genre].length; i++) {
//       totalBooks = totalBooks + library.shelves[genre].length
//     }
//     return `There are a total of ${totalBooks} books at the ${library.name}.`
// }
// }

 module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};