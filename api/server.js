const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const jwt = require("jsonwebtoken");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../clients/clients-router.js");

const harvestRouter = require("../harvest/harvest-router");
const loanRouter = require("../loan/loan-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/clients", authenticate, usersRouter);
server.use("/harvest", harvestRouter);
server.use("/loan", loanRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
