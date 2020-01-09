const db = require("../database/dbConfig.js");

const find = () => {
  return db("loan");
};

const findBy = filter => {
  return db("loan").where(filter);
};

const findById = id => {
  return db("loan")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("loan").insert(user, "id");
  return db("loan")
    .where({ id })
    .first();
};

const remove = id => {
  return db("loan")
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