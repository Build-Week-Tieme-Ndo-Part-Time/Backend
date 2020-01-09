const db = require("../database/dbConfig.js");

const find = () => {
  return db("newClient");
};

const findBy = filter => {
  return db("newClient").where(filter);
};

const findById = id => {
  return db("newClient")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("newClient").insert(user, "id");
  return db("newClient")
    .where({ id })
    .first();
};

const remove = id => {
  return db("newClient")
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
