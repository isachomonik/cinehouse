// Função construtora
const catalogo = require("../database/catalogo.json")

function Movie(id, title, duration, cast, relaseDate, onDisplay) {
    (this.id = id),
      (this.title = title),
      (this.duration = duration),
      (this.cast = cast),
      (this.relaseDate = relaseDate),
      (this.onDisplay = onDisplay);
  }

 function createMovie(id, title, duration, cast, relaseDate, onDisplay){
    let newMovie = Movie(id, title, duration, cast, relaseDate, onDisplay);

    // let obj = JSON.parse(catalogo);
    
    catalogo.push(newMovie);
    // obj = JSON.stringify(catalogo);
    return newMovie;
    // JSON.st
}

module.exports = createMovie