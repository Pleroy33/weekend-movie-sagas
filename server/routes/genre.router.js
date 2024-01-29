const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('inside router')
  const query = `SELECT movies.id, movies.title, movies.poster, movies.description FROM "movies"
  
  WHERE movies.id=$1
  `
  
  
  
//   ` SELECT movies.id, movies.title, movies.poster, movies.description
//   FROM "movies"
// WHERE movies.id=$1`

  const queryParams = [req.params.id]
  pool
    .query(query, queryParams)

    // res.send the result in rows
    .then((result) => {
      console.log("Result.Rows:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in details get:', error)
      res.sendStatus(500)
    })

});

module.exports = router;