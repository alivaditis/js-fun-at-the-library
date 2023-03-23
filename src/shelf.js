function shelfBook(title, shelfName) {
  if (shelfName.length < 3) {
    shelfName.unshift(title);
  }
}

function unshelfBook(title, shelfName) {
  for (var i= shelfName.length - 1; i >= 0; i--) {
    if (shelfName[i].title === title) {
      shelfName.splice(i,1);
    }
}
}

function listTitles(shelfName) {
  titles = ""
  for (i = 0; i < shelfName.length; i++) {
    if (i === shelfName.length -1) {
      titles = titles + shelfName[i].title
    } else {
    titles = titles + shelfName[i].title + ", "
  }
  }
  return(titles)
}

function searchShelf() {
  
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};