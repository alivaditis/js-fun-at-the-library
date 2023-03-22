function createTitle(title) {
  return `The ${title}`;  
}

function buildMainCharacter(name, age, pronouns) {
  mainCharacter = {};
  mainCharacter.name = name;
  mainCharacter.age = age;
  mainCharacter.pronouns = pronouns;
  return mainCharacter;
}

function saveReview(reviewContent, reviewArray) {
  if (reviewArray.includes(reviewContent) === false) {
  reviewArray.push(reviewContent);
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}