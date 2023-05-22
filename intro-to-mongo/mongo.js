const dotenv = require("dotenv");
dotenv.config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://glrodasz:${process.env.MONGO_PASSWORD}@cluster0.a1jezpk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const getDB = async () => {
  await client.connect();
  return client.db("sample_training");
};

const getAll = async (collectionName, query = {}) => {
  try {
    const database = await getDB();
    return database.collection(collectionName).find(query).limit(10).toArray();
  } catch (error) {
    await client.close();
  }
};

module.exports = {
  getAll,
};
