var mongoose = require("mongoose");
var dotenv = require("dotenv");
require('dotenv').config();

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-d7zwzlz-shard-00-00.tgmtfzp.mongodb.net:27017,ac-d7zwzlz-shard-00-01.tgmtfzp.mongodb.net:27017,ac-d7zwzlz-shard-00-02.tgmtfzp.mongodb.net:27017/?ssl=true&replicaSet=atlas-vakvuk-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose
  .connect(MONGO_URI, {
    dbName: "data_ejercicios",
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("connected database"))
  .catch((err) => console.log("error connecting", err));

module.exports = mongoose;
