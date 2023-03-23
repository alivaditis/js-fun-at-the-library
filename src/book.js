function createTitle(title) {
  bookTitle = `The ${title}`;
  return bookTitle;  
}

function buildMainCharacter(name, age, pronouns) {
  bookCharacter = {};
  bookCharacter.name = name;
  bookCharacter.age = age;
  bookCharacter.pronouns = pronouns;
  return bookCharacter;
}

function saveReview(reviewContent, reviewArray) {
  if (reviewArray.includes(reviewContent) === false) {
  reviewArray.push(reviewContent);
  }
}

function calculatePageCount(title) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}

function writeBook(title, character, bookGenre) {
  var book = {}
  book.title = bookTitle;
  book.mainCharacter = bookCharacter;
  book.pageCount = calculatePageCount(title);
  book.genre = bookGenre;
  return book;
}

function editBook() {

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}