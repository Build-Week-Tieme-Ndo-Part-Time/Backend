const db = require("../database/dbConfig.js");

const find = () => {
  return db("harvest");
};

const findBy = filter => {
  return db("harvest").where(filter);
};

const findById = id => {
  return db("harvest")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("harvest").insert(user, "id");
  return db("harvest")
    .where({ id })
    .first();
};

const remove = id => {
  return db("harvest")
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
