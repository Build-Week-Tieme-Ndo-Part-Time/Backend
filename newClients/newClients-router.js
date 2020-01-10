const router = require("express").Router();

const Users = require("./newClients-model.js");
const restricted = require("../auth/authenticate-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  Users.add(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(id => {
      if (id > 0) {
        res.status(200).json({
          message: "client has been deleted"
        });
      } else {
        res.status(404).json({
          message: "The client with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: "The post could not be removed"
      });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  if (id === false) {
    res.status(404).json({
      message: " The client with that ID does not exist"
    });
  } else {
    Users.update(id, changes)
      .then(post => {
        res.status(200).json(post);
      })
      .catch(err => {
        res.status(500).json({
          error: "Unable to update."
        });
      });
  }
});

module.exports = router;
