var cinema = "Cine Midnigth";
const showMovies = require("./functions/showMovies");
const catalogo = require("./database/catalogo.json");
const findMovie = require("./functions/findMovies");
const addMovie = require("./functions/addMovie")

const action = process.argv[2];



// Função que adiciona filmes ao array
// function addMovie(id, title, duration, actors, relaseDate, onDisplay) {
//   let newMovie = new Movie(id, title, duration, actors, relaseDate, onDisplay);
//   const fs = require("fs");
//   fs.writeFileSync('./database/catalogo.json', JSON.stringify(newMovie), {flag: 'a'})

//   return;
// }

switch (action) {
  case "show":
    showMovies(catalogo);
    break;

  case "find":
    console.log("Searching this movie on database...");
    let id = process.argv[3];
    console.table(findMovie(id));
    break;
  case "add":
    addMovie(3, "Donnie Darko", 153, ["Jake Gyllenhaal", "Jena Malone"], 2000, false)
    showMovies(catalogo)
    break;

  default:
    console.log("Error 404: Command not found.");
}

// Função para mudar o status do onDisplay
function changeStatus(id, status) {
  let movie = findMovie(id);
  movie.onDisplay = status;
}
