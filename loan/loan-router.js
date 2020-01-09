const router = require("express").Router();

const Loans = require("./loan-model.js");
//const restricted = require("../auth/authenticate-middleware.js");

router.get("/", (req, res) => {
  Loans.find()
    .then(loan => {
      res.json(loan);
    })
    .catch(err => res.send(err));
});

module.exports = router;
