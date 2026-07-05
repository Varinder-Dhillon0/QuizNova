const mongoose = require("mongoose");
const dns = require("node:dns/promises");

const connectDb = async () => {
  dns.setServers(["1.1.1.1"]);

  try {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_DB_ID}:${process.env.PASSWORD}@cluster0.d3nhn.mongodb.net/?appName=Cluster0`,
      )
      .then(() => {
        console.log("Db connected");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDb };
