const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
 ` SELECT g.name FROM "movies" m

JOIN "movies_genres"  gm on m.id = gm.movie_id
JOIN  "genres" g on gm.genre_id =g.id
WHERE m.id = $1`

const queryParams = [req.params.id]
  res.sendStatus(500)
});

module.exports = router;