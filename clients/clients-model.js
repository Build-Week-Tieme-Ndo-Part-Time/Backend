const db = require("../database/dbConfig.js");

const find = () => {
  return db("clients");
};

const findBy = filter => {
  return db("clients").where(filter);
};

const findById = id => {
  return db("clients")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("clients").insert(user, "id");
  return db("clients")
    .where({ id })
    .first();
};

const remove = id => {
  return db("clients")
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
