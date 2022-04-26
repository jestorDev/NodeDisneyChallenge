//import User from "./user.mjs";
import Character from "./character.mjs";
import Movie from "./movie.mjs";
import Genre from "./genre.mjs";
import User from "./user.mjs";

import sequelize from "./db.mjs";

let constructors = [Character, Movie, Genre , User]
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
console.log(sequelize.models)

export default sequelize

