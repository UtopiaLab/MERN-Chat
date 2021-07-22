const MONGODB = require("mongodb");
const MongoClient = MONGODB.MongoClient;
const URL = process.env.MONGO_URL;

try {
  const M_CONNECT = MongoClient.connect(URL, {
    useUnifiedTopology: true,
  });
  module.exports = {MONGODB, M_CONNECT};
} catch (ex) {
  console.log(err);
}
