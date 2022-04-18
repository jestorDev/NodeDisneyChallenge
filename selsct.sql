SELECT * 
FROM "Character" 
INNER JOIN "CharacterMovies" ON "Character"."ID" = "CharacterMovies"."CharacterID"
INNER JOIN "Movie" ON "CharacterMovies"."MovieID" = "Movie"."ID" 
WHERE "CharacterID"=3;