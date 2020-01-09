const router = require("express").Router();

const Harvest = require("./harvest-model.js");
//onst restricted = require("../auth/authenticate-middleware.js");

router.get("/", (req, res) => {
  Harvest.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
