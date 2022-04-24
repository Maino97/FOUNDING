const router = require('express').Router()


router.get('/create', function (req, res) {
    res.render({ create: true });
  });

  router.get('/edit', function (req, res) {
    res.render({ edit: true });
  });


module.exports = router