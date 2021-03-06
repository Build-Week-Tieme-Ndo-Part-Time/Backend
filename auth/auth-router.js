const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

const Clients = require("../clients/clients-model.js");

router.post("/register", (req, res) => {
  let client = req.body;
  const hash = bcrypt.hashSync(client.password, 10);
  client.password = hash;

  Clients.add(client)
    .then(saved => {
      // pass the created user into the genToken() method, and get the token
      const token = genToken(saved);
      // return the user object, and the token.
      res.status(201).json({ created_client: saved, token: token });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Clients.findBy({ username })
    .first()
    .then(client => {
      if (client && bcrypt.compareSync(password, client.password)) {
        // pass the found user into the genToken() method, and get the token
        const token = genToken(client);
        // return the found user's username, and the token"
        res.status(200).json({ username: client.username, token: token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function genToken(client) {
  // create the payload...
  const payload = {
    userid: client.id,
    username: client.username
  };

  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = router;
