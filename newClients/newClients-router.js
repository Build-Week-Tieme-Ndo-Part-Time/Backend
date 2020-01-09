const db = require("../database/dbConfig.js");

const find = () => {
  return db("newClients");
};

const findBy = filter => {
  return db("newClients").where(filter);
};

const findById = id => {
  return db("newClients")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("newClients").insert(user, "id");
  return db("newClients")
    .where({ id })
    .first();
};

const remove = id => {
  return db("newClients")
    .where({ id })
    .del();
};

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove
};
