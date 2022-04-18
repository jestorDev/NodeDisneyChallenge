//import User from "./user.mjs";
import Character from "./character.mjs";
import Movie from "./movie.mjs";
import Genre from "./genre.mjs";

import sequelize from "./db.mjs";

let constructors = [Character, Movie, Genre]
let models = sequelize.models


constructors.forEach(seqModel => {
    seqModel(sequelize)
});


await sequelize.sync();


console.log("-----Completed Table creations ------- ");

models.Movie.belongsToMany(models.Genre, { through: 'MovieGenres' });
models.Genre.belongsToMany(models.Movie, { through: 'MovieGenres' });



models.Movie.belongsToMany(models.Character, { through: 'CharacterMovies' });
models.Character.belongsToMany(models.Movie, { through: 'CharacterMovies' });

console.log("-----Completed Table asociations ------- ");




await sequelize.sync();
console.log("-----Completed INIT------- ");
export default sequelize

