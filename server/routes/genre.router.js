const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('inside router')
  //query for the database to get our movie and genre  data for movieDetails 
  const query =`
  SELECT movies.id, movies.title, movies.poster, movies.description, STRING_AGG (genres.name, ',') AS genres FROM "movies"
  JOIN "movies_genres" ON movies.id=movies_genres.movie_id
  JOIN "genres" ON movies_genres.genre_id=genres.id
  WHERE movies.id=$1
  GROUP BY movies.id;
`
  
  
//original query to see that get route was returning data
  //  SELECT movies.id, movies.title, movies.poster, movies.description
//   FROM "movies"
// WHERE movies.id=$1`
 
//setting the id to queryparams to pass to the pool 
  const queryParams = [req.params.id];
  pool
    .query(query, queryParams)

    // res.send the result in rows
    .then((result) => {
      console.log("Result.Rows:", result.rows);
      res.send(result.rows);
    })
    //catch error
    .catch((error) => {
      console.log('error in details get:', error)
    
    })

});

module.exports = router;