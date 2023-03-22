function shelfBook(title, shelfName) {
  if (shelfName.length < 3) {
    shelfName.unshift(title);
  }
}

function unshelfBook(title, shelfName) {
  for (i=0; i < shelfName.length; i++) {
    if (shelfName[i] == title) {
      shelfName.splice(i, 1);
    }
  }
}

module.exports = {
  shelfBook,
  unshelfBook
  // listTitles,
  // searchShelf
};