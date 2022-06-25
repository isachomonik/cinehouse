const catalogo = require("../database/catalogo.json");

module.exports = (searchID) => {
  function isTheSameId(movie) {
    return movie.id == searchID ? true : false;
  }

  return catalogo.find(isTheSameId);
};
